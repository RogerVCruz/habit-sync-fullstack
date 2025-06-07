import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Habit, HabitFrequency, Prisma } from '@prisma/client';
import { CreateHabitDto } from './habit.dto';

@Injectable()
export class HabitsService {
  constructor(private prisma: PrismaService) {}

  async createHabit(userId: string, createHabitDto: CreateHabitDto): Promise<Habit> {
    try {
      return await this.prisma.habit.create({
        data: {
          ...createHabitDto,
          userId,
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new Error('Um hábito com este nome já existe.');
        }
      }
      throw new Error('Erro ao criar hábito.');
    }
  }

  async completeHabit(habitId: string, userId: string): Promise<Habit> {
    try {
      const habit = await this.prisma.habit.findUnique({
        where: { id: habitId },
        include: { completions: { orderBy: { date: 'desc' }, take: 1 } },
      });

      if (!habit || habit.userId !== userId) {
        throw new Error('Hábito não encontrado.');
      }

      const now = new Date();
      const lastCompletion = habit.completions[0];
      let newStreak = habit.streak;

      if (lastCompletion) {
        const lastCompletionDate = new Date(lastCompletion.date);
        const daysDifference = Math.floor(
          (now.getTime() - lastCompletionDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (daysDifference === 1) {
          // Completou no dia seguinte, aumenta a streak
          newStreak += 1;
        } else if (daysDifference > 1) {
          // Quebrou a streak
          newStreak = 1;
        }
        // Se completou no mesmo dia, mantém a streak atual
      } else {
        // Primeira conclusão
        newStreak = 1;
      }

      // Atualiza o recorde se necessário
      const bestStreak = Math.max(habit.bestStreak, newStreak);

      // Cria a conclusão e atualiza o hábito
      return await this.prisma.$transaction(async (tx) => {
        await tx.habitCompletion.create({
          data: {
            habitId,
            date: now,
          },
        });

        return tx.habit.update({
          where: { id: habitId },
          data: {
            streak: newStreak,
            bestStreak,
          },
        });
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error('Erro ao registrar conclusão do hábito.');
      }
      throw error;
    }
  }

  async getUserHabits(
    userId: string,
    filters?: { active?: boolean; frequency?: HabitFrequency }
  ): Promise<Habit[]> {
    try {
      const where: Prisma.HabitWhereInput = {
        userId,
        ...(filters?.frequency && { frequency: filters.frequency }),
      };

      return await this.prisma.habit.findMany({
        where,
        include: {
          completions: {
            orderBy: { date: 'desc' },
            take: 1,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new Error('Erro ao buscar hábitos do usuário.');
      }
      throw error;
    }
  }
}