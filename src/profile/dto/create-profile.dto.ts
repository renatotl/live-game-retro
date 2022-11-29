
import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger

import {isString} from "class-validator"


export class CreateProfileDto {

    // @ApiProperty
    // @isString
    title: string
    imageURL: string
}
