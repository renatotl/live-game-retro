import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email para cadastro',
    example: 'Abcd@1234.com',
  }) //swagger
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Exemplo de senha',
    example: 'senhaFraca',
  }) //swagger
  @IsString()
  password: string;
  // static password: any;
}


