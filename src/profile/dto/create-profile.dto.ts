
import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger

import {IsString} from "class-validator"


export class CreateProfileDto {

    @ApiProperty()
    @IsString()
    title: string
    imageURL: string
}
