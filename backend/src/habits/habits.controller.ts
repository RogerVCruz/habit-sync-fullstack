import { Controller, Post, Body, Get, Param, UseGuards, Request, Query } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './habit.dto';
import { AuthGuard } from '../auth/auth.guard';
import { HabitFrequency } from '@prisma/client';

@Controller('habits')
@UseGuards(AuthGuard)
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  async createHabit(@Request() req, @Body() createHabitDto: CreateHabitDto) {
    return this.habitsService.createHabit(req.user.id, createHabitDto);
  }

  @Post(':id/complete')
  async completeHabit(@Request() req, @Param('id') id: string) {
    return this.habitsService.completeHabit(id, req.user.id);
  }

  @Get()
  async getUserHabits(
    @Request() req,
    @Query('frequency') frequency?: HabitFrequency,
    @Query('active') active?: boolean,
  ) {
    return this.habitsService.getUserHabits(req.user.id, { frequency, active });
  }
}