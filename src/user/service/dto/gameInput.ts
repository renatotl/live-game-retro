import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class GameDto {


  @ApiProperty() //swagger
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty() //swagger
  @IsNotEmpty()
  @IsString()
  coverImageUrl: string;

  @ApiProperty() //swagger
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  year: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  imdbScore: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  trailerYouTubeUrl: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  gameplayYouTubeUrl: string



  // campo de relacionamento tabela Genero
  // @ApiProperty() //swagger
  // @IsUUID()
  // generoId: string
}
