import { Module } from '@nestjs/common';
import { GameService } from './entities/games.service';
import { GameController } from './game.controller/game.controller';



// importando o prismaService
import {PrismaService} from '../prisma/prisma.service'
// importando o reposytory
import{GameRepository} from '../game/entities/game.repository'



@Module({
    controllers: [GameController],
    providers: [GameService, PrismaService, GameRepository] //adicionando na module
})

export class ModuleGame {}