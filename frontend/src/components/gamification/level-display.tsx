
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, Trophy } from "lucide-react"

interface LevelDisplayProps {
  level: number
  currentXp: number
  xpToNextLevel: number
  className?: string
}

export function LevelDisplay({ level, currentXp, xpToNextLevel, className }: LevelDisplayProps) {
  const progressPercentage = (currentXp / xpToNextLevel) * 100

  return (
    <div className={`text-center space-y-4 ${className}`}>
      <div className="flex items-center justify-center space-x-4">
        <Badge variant="secondary" className="text-lg px-4 py-2">
          <Star className="h-4 w-4 mr-2" />
          Nível {level}
        </Badge>
        {level >= 10 && (
          <Trophy className="h-6 w-6 text-yellow-500" />
        )}
      </div>
      
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">
          {currentXp} / {xpToNextLevel} XP
        </div>
        <Progress value={progressPercentage} className="w-64 mx-auto" />
        <div className="text-xs text-muted-foreground">
          {xpToNextLevel - currentXp} XP para o próximo nível
        </div>
      </div>
    </div>
  )
}
