import {
    INestApplication,
    OnModuleDestroy,
    OnModuleInit,
  } from '@nestjs/common';
  import { PrismaClient } from '@prisma/client';
  
  export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy// vem do nest o OnModuleInit na hora que o modulo iniciar. OnModuleDestroy 
  {
    async onModuleDestroy() {
      await this.$disconnect();
    }
    async onModuleInit() {
      await this.$connect();
    }
  // wuando a a plicaçãp estiver incerrando 
    async enableShutdownHooks(app: INestApplication) {
      this.$on('beforeExit', async () => {
        await app.close();
      });
    }
  }

  // presisamos deste cara para de fato fazer a interaçao com o db e colocamos ele no serive com as funções