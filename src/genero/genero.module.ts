import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';

// importando o prismaService
import {PrismaService} from '../prisma/prisma.service'
import { GeneroRepository } from './entities/genero.repository';
// importando o reposytory


@Module({
  controllers: [GeneroController],
  providers: [GeneroService,PrismaService,GeneroRepository]
})
export class GeneroModule {}
