
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Trophy, Home, Target, User, LogOut } from "lucide-react"
import { useSession } from "@/providers/SessionProvider"
import { toast } from "sonner"

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout, isAuthenticated } = useSession()
  const isActive = (path: string) => location.pathname === path

  const handleLogout = () => {
    logout()
    toast.success("Logout realizado com sucesso!")
    navigate("/")
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">HabitQuest</span>
          </Link>
          
          {isAuthenticated && (
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/dashboard">
                <Button 
                  variant={isActive("/dashboard") ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </Button>
              </Link>
              <Link to="/habits">
                <Button 
                  variant={isActive("/habits") ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <Target className="h-4 w-4" />
                  <span>Hábitos</span>
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <div className="hidden md:flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">Olá, {user?.name}</span>
              </div>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Perfil
              </Button>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">Entrar</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Cadastrar</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
