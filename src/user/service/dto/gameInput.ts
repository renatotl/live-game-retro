import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger
import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export class gameDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  data: number;
  @ApiProperty()
  @IsNotEmpty()
  favorite: boolean;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  img: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  comment: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
