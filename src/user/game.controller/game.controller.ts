import {   Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GameService } from "../entities/games.service";
import { PartialGameDto } from "../service/dto/partialGameInput.Dto"

@ApiTags('games')
@Controller('games')
export class GameController {

    constructor( private serviceGame: GameService){
        
    }

    @Get()


    @Post()
    createGame(){
        return this.serviceGame
    }

    @Patch()
    updateGame(){
        return this.serviceGame
    }

    @Delete()
    deleteGame(){
        return this.serviceGame
    }


}