import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],// vou utilisar em outro lugar 
  exports: [PrismaService],// vai ser usados em outros modulos 
})
export class DatabaseModule {}

