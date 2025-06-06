
export interface User {
  id: string
  name: string
  email: string
  level: number
  xp: number
  xpToNextLevel: number
  streak: number
  createdAt: Date
}

export interface Habit {
  id: number
  name: string
  description: string
  frequency: "daily" | "weekly" | "monthly"
  category: string
  streak: number
  totalDays: number
  completedDays: number
  completedToday: boolean
  createdAt: Date
  userId: string
}

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  rarity: "common" | "rare" | "epic" | "legendary"
  xpReward: number
  earned: boolean
  earnedAt?: Date
}

export interface HabitCompletion {
  id: string
  habitId: number
  userId: string
  date: Date
  xpEarned: number
}

export interface UserStats {
  totalHabits: number
  completedToday: number
  successRate: number
  longestStreak: number
  totalXpEarned: number
  achievementsCount: number
}
