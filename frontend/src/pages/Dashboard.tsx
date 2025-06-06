
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navbar } from "@/components/layout/navbar"
import { LevelDisplay } from "@/components/gamification/level-display"
import { Trophy, Target, Flame, Calendar, TrendingUp, Award } from "lucide-react"
import { useSession } from "@/providers/SessionProvider"

export default function Dashboard() {
  const { user } = useSession()

  // Mock data para demonstração
  const stats = {
    habitsCompleted: 15,
    currentStreak: 7,
    totalHabits: 5,
    weekProgress: 75
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo de volta, {user?.name}! Vamos continuar sua jornada de hábitos.
          </p>
        </div>

        {/* Level Display */}
        <LevelDisplay 
          level={user?.level || 1}
          currentXp={user?.points || 0}
          xpToNextLevel={100}
          className="bg-card p-6 rounded-lg border"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hábitos Completados</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.habitsCompleted}</div>
              <p className="text-xs text-muted-foreground">
                +2 desde ontem
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sequência Atual</CardTitle>
              <Flame className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.currentStreak}</div>
              <p className="text-xs text-muted-foreground">
                dias consecutivos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Hábitos</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalHabits}</div>
              <p className="text-xs text-muted-foreground">
                hábitos ativos
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progresso da Semana</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.weekProgress}%</div>
              <Progress value={stats.weekProgress} className="mt-2" />
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Atividade Recente</CardTitle>
              <CardDescription>
                Suas últimas conquistas e atividades
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Hábito completado: Exercitar-se</p>
                  <p className="text-xs text-muted-foreground">Hoje às 07:30</p>
                </div>
                <Badge variant="secondary">+10 XP</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Nova sequência de 7 dias!</p>
                  <p className="text-xs text-muted-foreground">Hoje</p>
                </div>
                <Badge variant="secondary">+25 XP</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Hábito completado: Ler</p>
                  <p className="text-xs text-muted-foreground">Ontem às 21:00</p>
                </div>
                <Badge variant="secondary">+5 XP</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Conquistas Recentes</CardTitle>
              <CardDescription>
                Marcos que você desbloqueou
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 text-yellow-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Primeira Sequência</p>
                  <p className="text-xs text-muted-foreground">Complete 3 dias consecutivos</p>
                </div>
                <Badge>Desbloqueada!</Badge>
              </div>
              <div className="flex items-center space-x-4">
                <Trophy className="h-8 w-8 text-blue-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Dedicado</p>
                  <p className="text-xs text-muted-foreground">Complete 7 dias consecutivos</p>
                </div>
                <Badge>Desbloqueada!</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
