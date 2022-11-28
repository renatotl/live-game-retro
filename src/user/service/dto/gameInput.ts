import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class GameDto {
  @ApiProperty() //swagger
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty() //swagger
  @IsNotEmpty()
  @IsNumber()
  data: number;

  @ApiProperty() //swagger
  @IsNotEmpty()
  favorite: boolean;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  img: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  comment: string;

  @ApiProperty() //swagger
  @IsString()
  @IsNotEmpty()
  name: string;
}
