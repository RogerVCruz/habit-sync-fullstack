# Estrutura do Frontend

## Visão Geral
Este é o diretório frontend do projeto Habit-Sync2, construído com React e TypeScript.

## Estrutura de Diretórios

### `/public`
Arquivos estáticos que são servidos diretamente:
- `favicon.ico`: Ícone do site
- `placeholder.svg`: Imagem placeholder
- `robots.txt`: Configurações para crawlers

### `/src`
Código fonte principal da aplicação:

#### `/components`
Componentes React reutilizáveis:
- `/auth`: Componentes relacionados à autenticação
- `/gamification`: Componentes do sistema de gamificação
- `/habits`: Componentes relacionados aos hábitos
- `/layout`: Componentes de layout
- `/ui`: Componentes de interface do usuário
- `theme-provider.tsx`: Provedor de tema da aplicação
- `theme-toggle.tsx`: Alternador de tema claro/escuro

#### `/hooks`
Hooks personalizados:
- `use-mobile.tsx`: Hook para detecção de dispositivos móveis
- `use-toast.ts`: Hook para notificações toast
- `useAuth.tsx`: Hook para gerenciamento de autenticação

#### `/lib`
Utilitários e tipos:
- `types.ts`: Definições de tipos TypeScript
- `utils.ts`: Funções utilitárias

#### `/pages`
Páginas da aplicação:
- `Dashboard.tsx`: Página principal do dashboard
- `Habits.tsx`: Página de gerenciamento de hábitos
- `Index.tsx`: Página inicial
- `NotFound.tsx`: Página 404
- `/auth`: Páginas relacionadas à autenticação

#### `/providers`
Provedores de contexto:
- `SessionProvider.tsx`: Provedor de sessão

### Arquivos de Configuração
- `package.json`: Dependências e scripts
- `tsconfig.json`: Configuração do TypeScript
- `vite.config.ts`: Configuração do Vite
- `tailwind.config.ts`: Configuração do Tailwind CSS
- `postcss.config.js`: Configuração do PostCSS
- `eslint.config.js`: Configuração do ESLint
- `components.json`: Configuração de componentes