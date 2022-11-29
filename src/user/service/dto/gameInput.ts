import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger
import { IsNotEmpty, IsString } from 'class-validator';

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
  Description: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  year: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  ImdbScore: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  TrailerYouTubeUrl: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  GameplayYouTubeUrl: string
}
