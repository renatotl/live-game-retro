// DTO = data trasport object

import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  // só não tem o id

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cpf: string; // cpf só pode ser string / existe CPF que tem o 0 na frente e o banco desconsidera esse cara!
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;
}
