import { IsString, IsNotEmpty, Length, IsEnum, IsOptional, IsNumber, Min } from 'class-validator';
import { HabitFrequency } from '@prisma/client';

export class CreateHabitDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(HabitFrequency)
  @IsOptional()
  frequency?: HabitFrequency;

  @IsOptional()
  @IsNumber()
  @Min(1)
  targetDays?: number;
}

export class UpdateHabitDto {
  @IsOptional()
  @IsString()
  @Length(3, 100)
  name?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(HabitFrequency)
  frequency?: HabitFrequency;

  @IsOptional()
  @IsNumber()
  @Min(1)
  targetDays?: number;
}