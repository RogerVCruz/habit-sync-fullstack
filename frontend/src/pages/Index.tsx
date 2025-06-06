
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Trophy, Target, Flame, Star, Users, TrendingUp } from "lucide-react"

export default function Index() {
  const features = [
    {
      icon: Target,
      title: "Rastreamento de Hábitos",
      description: "Acompanhe seus hábitos diários com facilidade e precisão"
    },
    {
      icon: Flame,
      title: "Sistema de Sequências",
      description: "Mantenha sua motivação alta com sequências de dias consecutivos"
    },
    {
      icon: Star,
      title: "Sistema de Níveis",
      description: "Ganhe XP e suba de nível conforme completa seus hábitos"
    },
    {
      icon: Trophy,
      title: "Conquistas",
      description: "Desbloqueie conquistas especiais e marcos importantes"
    },
    {
      icon: TrendingUp,
      title: "Análises Detalhadas",
      description: "Visualize seu progresso com gráficos e estatísticas"
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Conecte-se com outros usuários e compartilhe sua jornada"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">HabitQuest</span>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="ghost">Entrar</Button>
            </Link>
            <Link to="/register">
              <Button>Começar</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Transforme sua vida através de
            <span className="text-primary block">hábitos gamificados</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            HabitQuest combina o poder dos hábitos com elementos de jogos para tornar o desenvolvimento pessoal divertido e envolvente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="w-full sm:w-auto">
                Começar Gratuitamente
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ver Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher o HabitQuest?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossa plataforma oferece tudo que você precisa para construir e manter hábitos saudáveis de forma divertida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-card rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-12">HabitQuest em números</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Usuários ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500,000+</div>
              <div className="text-muted-foreground">Hábitos completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Taxa de sucesso</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram suas vidas com o HabitQuest.
          </p>
          <Link to="/register">
            <Button size="lg" className="px-8">
              Começar Agora - É Grátis!
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-primary" />
              <span className="font-bold">HabitQuest</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 HabitQuest. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
