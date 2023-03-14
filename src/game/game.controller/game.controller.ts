import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  BadRequestException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

import { GameService } from '../entities/games.service';
import { PartialGameDto } from '../../user/service/dto/partialGameInput.Dto';
import { GameDto } from 'src/user/service/dto/gameInput';
import { UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('games')
@Controller('games')
export class GameController {
  constructor(private serviceGame: GameService) {}

 // @UseGuards(AuthGuard())// quem de fato protege as rotas 
 // @ApiBearerAuth()
  @Get('getAllGames')
  async getAllGames(@Res() response: Response): Promise<void> {
    // mesmo método do service
    try {
      const result = await this.serviceGame.getAllGames(); // esse ultime getAllUsers() é a função do banco
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

  @UseGuards(AuthGuard())// quem de fato protege as rotas 
  @ApiBearerAuth()
  @Get('getGameById/:id') //esse cara colocamos ese parametro dentor do @Get porque famos receber por param
  async getGameById(
    @Param('id') gameId: string,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const result = await this.serviceGame.getGameById(gameId);
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
    }
  }

 // @UseGuards(AuthGuard())// quem de fato protege as rotas 
 // @ApiBearerAuth()
  @Post('createGame') // o body eu vou querer '{}" desestruturado do tipo UserDto
  async createGame(
    @Body() { title, coverImageUrl, description, year, imdbScore,trailerYouTubeUrl,gameplayYouTubeUrl }: GameDto,
    @Res() response: Response,
  ): Promise<void> {
    // de IUserEntity troquie para void porque não tem return
    // se algo pode dar errado vai da errado. clen code
    try {
      const result = await this.serviceGame.createGame({
        title,
        coverImageUrl,
        description,
        year,
        imdbScore,
        trailerYouTubeUrl,
        gameplayYouTubeUrl
      });

      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }
 // @UseGuards(AuthGuard())// quem de fato protege as rotas 
 // @ApiBearerAuth()
  @ApiOperation({
    summary: 'O id vai no Body!',
  })
  @Patch('updateGame') //Body/ usado p PartialUserDto porque não precisamos enviar todos os campospara atualizar
  // o Body diz que o userData tem que ter o id
  async updateGame(
    @Body() gameData: PartialGameDto,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const result = await this.serviceGame.updateGame(gameData);
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }
 // @UseGuards(AuthGuard())// quem de fato protege as rotas 
 // @ApiBearerAuth()
  @Delete('deleteGameById/:id') // esse Param vai pegar o 'id'
  async deleteGameById(@Param('id') gameId: string): Promise<String> {
    // promise de string
    try {
      const gameIdDeleted = await this.serviceGame.deleteGame(gameId);
      console.log(gameIdDeleted);
      if (gameIdDeleted) {
        return 'Game deletado com sucesso';
      } else {
        return 'Game não encontrado';
      }
    } catch (err) {
      console.log(err);
    }
  }

}
