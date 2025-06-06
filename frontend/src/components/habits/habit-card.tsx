
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle, Flame, Target } from "lucide-react"

interface HabitCardProps {
  habit: {
    id: number
    name: string
    description: string
    streak: number
    completedToday: boolean
    category: string
    completedDays: number
    totalDays: number
  }
  onToggle: (id: number) => void
}

export function HabitCard({ habit, onToggle }: HabitCardProps) {
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
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{habit.name}</CardTitle>
            <CardDescription>{habit.description}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onToggle(habit.id)}
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
          <span>{Math.round((habit.completedDays / habit.totalDays) * 100)}% de sucesso</span>
          <div className="flex items-center space-x-1">
            <Target className="h-3 w-3" />
            <span>Meta diária</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
