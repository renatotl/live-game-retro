import {
  BadRequestException,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { IUserEntity } from '../entities/user.entity';

import { UserService } from '../entities/user.service';
import { PartialUserDto } from '../service/dto/partialUserInput.Dto';

import { UserDto } from '../service/dto/userInput';

// avisando o NEST que este cara é um controller
@Controller('user')
export class UserController {
  // o controller manda o service trabalhar/ se o controller não conhecer o service ele não vai funcionar/ controller depende do service/ quando dependo de algo coloco logo no constructor()
  constructor(private serviceUser: UserService) {}

  // modificando uma class ou um metodo
  @Get()// ANTIGO Promise<IUserEntity[]>
  async getAllUsers(@Res() response: Response,): Promise<void> {
    // mesmo método do service
    try { 
    const result = await this.serviceUser.getAllUsers(); // esse ultime getAllUsers() é a função do banco
    response.status(201).send(result);
    }catch (err) {
     console.log(err)
      response.status(400)
      throw new BadRequestException(err.message); // mensgem vem do service
    }
    
  }

  @Get(':id') //esse cara colocamos ese parametro dentor do @Get porque famos receber por param
  async getUserById(@Param() userId: string, @Res() response: Response,): Promise<void> {
    try {
      const result = await this.serviceUser.getUserById(userId);
      response.status(201).send(result);
    } catch (err) {
      console.log(err);

    }
  }

  @Post() // o body eu vou querer '{}" desestruturado do tipo UserDto
  async createUser(
    @Body() { cpf, email, password, name, role }: UserDto,
    @Res() response: Response,
  ): Promise<void> {
    // de IUserEntity troquie para void porque não tem return
    // se algo pode dar errado vai da errado. clen code
    try {
      const result = await this.serviceUser.createUser({
        cpf,
        email,
        password,
        name,
        role,
      });

      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

  // parch se não existir no bd o patch deve incerir
  //ele atualiza os dados mesmo que seja um campo só
  @Patch() //Body/ usado p PartialUserDto porque não precisamos enviar todos os campospara atualizar
  // o Body diz que o userData tem que ter o id
  async updateUser(@Body() userData: PartialUserDto,    @Res() response: Response,
  ): Promise<void> {
    try {
      const result  = await this.serviceUser.updateUser(userData);
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400)
    }
  }

  // famos receber por param o id então vamos para a propriedade para dentro do decorator delete
  @Delete(':id') // esse Param vai pegar o 'id'
  async deleteUserById(@Param('id') userId: string,     @Res() response: Response,
  ): Promise<string> {
    // promise de string
    try {
      const userIdDeleted = await this.serviceUser.deleteUserById(userId);
      if (userIdDeleted) {
       return  'usuário deletado com sucesso';
      } else {
       return  'Usuário não encontrado';
      }
    } catch (err) {
      console.log(err);
    }
  }
}
