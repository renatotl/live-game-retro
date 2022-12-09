// DTO = data trasport object

import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  // só não tem o id

  @ApiProperty({
    description: 'Nome do usuário. Apenas para exibição',
    example: 'Marcus Silva',
  }) //swagger
  @IsString()
  name: string;


  @ApiProperty({
    description: 'Email para cadastro',
    example: 'Abcd@1234.com',
  }) //swagger
  @IsEmail()
  email: string;


  @ApiProperty({
    description: 'Exemplo de senha',
    example: 'senhaFraca',
  }) //swagger
  @IsString()
  password: string;


  @ApiProperty({
    description: 'Exemplo de CPF',
    example: '1234567891011',
  }) //swagger
  @IsString()
  cpf: string; // cpf só pode ser string / existe CPF que tem o 0 na frente e o banco desconsidera esse cara!



  @ApiProperty() //swagger
  role: boolean;
}
