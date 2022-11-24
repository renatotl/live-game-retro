import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { get } from 'http';
import { IUserEntity } from '../entities/user.entity';

import { UserService } from '../entities/user.service';
import { PartialUserDto } from '../service/dto/partialUserInput.Dto';

import { UserDto } from '../service/dto/userInput';

// avisando o NEST que este cara é um controller
@Controller()
export class UserController {
  // o controller manda o service trabalhar/ se o controller não conhecer o service ele não vai funcionar/ controller depende do service/ quando dependo de algo coloco logo no constructor()
  constructor(private serviceUser: UserService) {}

  // modificando uma class ou um metodo
  @Get()
  async getAllUsers(): Promise<IUserEntity[]> {
    // mesmo método do service
    return await this.serviceUser.getAllUsers(); // esse ultime getAllUsers() é a função do banco
  }

  @Post() // o body eu vou querer '{}" desestruturado do tipo UserDto
  async createUser(
    @Body() { cpf, email, password, name, role }: UserDto,
  ): Promise<IUserEntity> {
    // se algo pode dar errado vai da errado. clen code
    try {
      return await this.serviceUser.createUser({
        cpf,
        email,
        password,
        name,
        role,
      });
    } catch (err) {
      console.log(err);
    }
  }


  // parch se não existir no bd o patch deve incerir 
  //ele atualiza os dados mesmo que seja um campo só
  @Patch(":id")//Body/ usado p PartialUserDto porque não precisamos enviar todos os campospara atualizar
  // o Body diz que o userData tem que ter o id
 async updateUser(@Body() userData: PartialUserDto): Promise<IUserEntity> {
  try { 
    return this.serviceUser.updateUser(userData)
  } catch (err) {
    console.log(err);
  }
  }

  @Delete()
  deleteUser() {
    return this.serviceUser;
  }
}
