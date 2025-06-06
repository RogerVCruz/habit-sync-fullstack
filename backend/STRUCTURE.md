# Estrutura do Backend

## Visão Geral
Este é o diretório backend do projeto Habit-Sync2, construído com NestJS e TypeScript.

## Estrutura de Diretórios

### `/src`
Código fonte principal da aplicação:

#### `/auth`
Módulo de autenticação:
- `auth.controller.ts`: Controlador para rotas de autenticação
- `auth.service.ts`: Serviço com lógica de autenticação
- `auth.guard.ts`: Guard para proteção de rotas
- `auth.module.ts`: Módulo de autenticação
- `constants.ts`: Constantes utilizadas na autenticação

#### `/users`
Módulo de usuários:
- `users.module.ts`: Módulo de usuários
- `users.service.ts`: Serviço com lógica de usuários

#### `/services`
Serviços compartilhados:
- `prisma.service.ts`: Serviço de conexão com o banco de dados

#### Arquivos Principais
- `main.ts`: Ponto de entrada da aplicação
- `app.module.ts`: Módulo raiz da aplicação
- `app.controller.ts`: Controlador principal
- `app.service.ts`: Serviço principal

### `/prisma`
Configurações do Prisma ORM:
- `schema.prisma`: Schema do banco de dados

### `/test`
Arquivos de teste:
- `app.e2e-spec.ts`: Testes end-to-end
- `jest-e2e.json`: Configuração do Jest para testes e2e

### Arquivos de Configuração
- `package.json`: Dependências e scripts
- `tsconfig.json`: Configuração do TypeScript
- `nest-cli.json`: Configuração do NestJS CLI
- `.prettierrc`: Configuração do Prettier
- `eslint.config.mjs`: Configuração do ESLint

## Tecnologias Principais
- NestJS: Framework backend
- Prisma: ORM para banco de dados
- TypeScript: Linguagem de programação
- Jest: Framework de testes