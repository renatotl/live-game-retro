import { Module } from '@nestjs/common';
import { GameService } from './entities/games.service';
import { GameController } from './game.controller/game.controller';



// importando o prismaService
import {PrismaService} from '../prisma/prisma.service'
// importando o reposytory
import{GameRepository} from '../game/entities/game.repository'
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/prisma/database.module';



@Module({
    imports: [DatabaseModule, PassportModule.register({ defaultStrategy: 'jwt' })],
    controllers: [GameController],
    providers: [GameService, GameRepository] //adicionando na module
})

export class ModuleGame {}