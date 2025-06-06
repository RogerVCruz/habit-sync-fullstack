
import { Card, CardContent } from "@/components/ui/card"
import { Award, LucideIcon } from "lucide-react"

interface AchievementCardProps {
  name: string
  description: string
  icon: LucideIcon
  earned: boolean
  rarity?: "common" | "rare" | "epic" | "legendary"
}

export function AchievementCard({ 
  name, 
  description, 
  icon: Icon, 
  earned, 
  rarity = "common" 
}: AchievementCardProps) {
  const getRarityColors = () => {
    const colors = {
      common: "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900",
      rare: "border-blue-300 bg-blue-50 dark:border-blue-700 dark:bg-blue-900",
      epic: "border-purple-300 bg-purple-50 dark:border-purple-700 dark:bg-purple-900",
      legendary: "border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900"
    }
    return colors[rarity]
  }

  return (
    <Card className={`${earned ? getRarityColors() : 'bg-muted/30 border-muted'} transition-all duration-200 ${earned ? 'hover:shadow-md' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-full ${earned ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium">{name}</h3>
              {earned && <Award className="h-4 w-4 text-yellow-500" />}
            </div>
            <p className="text-sm text-muted-foreground">{description}</p>
            {rarity !== "common" && earned && (
              <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${getRarityColors()}`}>
                {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
