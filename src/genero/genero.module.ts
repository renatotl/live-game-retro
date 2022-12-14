import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';

// importando o prismaService
import {PrismaService} from '../prisma/prisma.service'
import { GeneroRepository } from './entities/genero.repository';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/prisma/database.module';
// importando o reposytory


@Module({
  imports: [DatabaseModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [GeneroController],
  providers: [GeneroService,GeneroRepository]
})
export class GeneroModule {}
