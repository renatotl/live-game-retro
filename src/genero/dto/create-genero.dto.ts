import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger
import { IsEmail, IsNotEmpty, IsString, IsUUID } from 'class-validator';


export class CreateGeneroDto {
    // DTO = data trasport object
    // só não tem o id
  @ApiProperty()
  @IsString()
  title: string
   
//   @ApiProperty()
//   @IsUUID()
//   generoId: String
}
