import {BadRequestException, Controller, Get, Post, Body, Patch, Param, Delete,Res } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { PartialGeneroDto } from './dto/update-genero.dto';
import { Response } from 'express';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('genero')
@Controller('genero')
export class GeneroController {
  constructor(private readonly generoService: GeneroService) {}

  @Post('createGenero')
  async createGenero(
    @Body() { title }: CreateGeneroDto,
    @Res() response: Response,
  ): Promise<void> {
    // de IUserEntity troquie para void porque não tem return
    // se algo pode dar errado vai da errado. clen code
    try {
      const result = await this.generoService.create({
        title
      });

      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

  @Get('getAllGenero')
  async getAllGenero(@Res() response: Response): Promise<void> {
    // mesmo método do service
    try {
      const result = await this.generoService.findAll(); // esse ultime getAllUsers() é a função do banco
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

  @Get('getGeneroById/:id')
  async getGeneroById(
    @Param('id') generoId: string,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const result = await this.generoService.findOne(generoId);
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

  @Patch('updateGenero')
  async updateProfile(
    @Body() generoData: PartialGeneroDto,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const result = await this.generoService.update(generoData);
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

  @Delete('deleteGeneroById/:id')
  async deleteGeneroById(@Param('id') generoId: string): Promise<string> {
    // promise de string
    try {
      const generoIdDeleted = await this.generoService.remove(generoId);
      console.log(generoIdDeleted);
      if (generoIdDeleted) {
        return 'Género deletado com sucesso';
      } else {
        return 'Género não encontrado';
      }
    } catch (err) {
      console.log(err);
    }
  }
}
