import { Module } from '@nestjs/common';
import { GameService } from './entities/games.service';
import { GameController } from './game.controller/game.controller';




@Module({
    controllers: [GameController],
    providers: [GameService]
})

export class ModuleGame {}