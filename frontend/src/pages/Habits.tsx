
import { useState } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, Target, Flame, Calendar, CheckCircle2, Circle } from "lucide-react"

export default function Habits() {
  const [habits] = useState([
    {
      id: 1,
      name: "Exercitar-se",
      description: "30 minutos de exercício físico",
      frequency: "Diário",
      streak: 7,
      totalDays: 30,
      completedDays: 23,
      completedToday: true,
      category: "Saúde"
    },
    {
      id: 2,
      name: "Ler",
      description: "Ler pelo menos 30 minutos",
      frequency: "Diário",
      streak: 5,
      totalDays: 30,
      completedDays: 18,
      completedToday: true,
      category: "Educação"
    },
    {
      id: 3,
      name: "Meditar",
      description: "10 minutos de meditação",
      frequency: "Diário",
      streak: 3,
      totalDays: 30,
      completedDays: 15,
      completedToday: true,
      category: "Bem-estar"
    },
    {
      id: 4,
      name: "Estudar programação",
      description: "1 hora estudando código",
      frequency: "Diário",
      streak: 0,
      totalDays: 30,
      completedDays: 12,
      completedToday: false,
      category: "Carreira"
    }
  ])

  const toggleHabit = (id: number) => {
    console.log(`Toggling habit ${id}`)
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Saúde": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
      "Educação": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
      "Bem-estar": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
      "Carreira": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
    }
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Meus Hábitos</h1>
            <p className="text-muted-foreground mt-2">
              Gerencie e acompanhe seus hábitos diários
            </p>
          </div>
          <Button className="flex items-center space-x-2">
            <Plus className="h-4 w-4" />
            <span>Novo Hábito</span>
          </Button>
        </div>

        {/* Estatísticas gerais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Total de Hábitos</p>
                  <p className="text-2xl font-bold">{habits.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Concluídos Hoje</p>
                  <p className="text-2xl font-bold">
                    {habits.filter(h => h.completedToday).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Maior Sequência</p>
                  <p className="text-2xl font-bold">
                    {Math.max(...habits.map(h => h.streak))}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
                  <p className="text-2xl font-bold">77%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de hábitos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {habits.map((habit) => (
            <Card key={habit.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{habit.name}</CardTitle>
                    <CardDescription>{habit.description}</CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleHabit(habit.id)}
                    className={habit.completedToday ? "text-green-500" : "text-gray-400"}
                  >
                    {habit.completedToday ? (
                      <CheckCircle2 className="h-6 w-6" />
                    ) : (
                      <Circle className="h-6 w-6" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className={getCategoryColor(habit.category)}>
                    {habit.category}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">{habit.streak} dias</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progresso do mês</span>
                    <span>{habit.completedDays}/{habit.totalDays}</span>
                  </div>
                  <Progress 
                    value={(habit.completedDays / habit.totalDays) * 100} 
                    className="h-2"
                  />
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Frequência: {habit.frequency}</span>
                  <span>{Math.round((habit.completedDays / habit.totalDays) * 100)}% de sucesso</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
