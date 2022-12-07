// DTO = data trasport object

import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  // só não tem o id

  @ApiProperty() //swagger
  @IsString()
  name: string;
  @ApiProperty() //swagger
  @IsEmail()
  email: string;
  @ApiProperty() //swagger
  @IsString()
  password: string;
  @ApiProperty() //swagger
  @IsString()
  cpf: string; // cpf só pode ser string / existe CPF que tem o 0 na frente e o banco desconsidera esse cara!
  @ApiProperty() //swagger
  role: boolean;
}
