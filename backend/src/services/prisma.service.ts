import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
      // Dependendo da sua estratégia de tratamento de erros, você pode relançar o erro ou sair do aplicativo
      process.exit(1); // Exemplo: sair do aplicativo em caso de falha na conexão
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
      console.log('Conexão com o banco de dados encerrada.');
    });
  }
}