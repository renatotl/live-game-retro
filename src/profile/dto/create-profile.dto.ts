
import { ApiProperty } from '@nestjs/swagger'; // yarn add @nestjs/swagger

import {IsString, IsUUID} from "class-validator"


export class CreateProfileDto {

    @ApiProperty()
    @IsString()
    title: string
    
    @ApiProperty()
    @IsString()
    imageURL: string

    @ApiProperty()
    @IsUUID()// não precisa do isString
    userId: string// recebe o dado do relacionamento ID/ relacionamento com a tabela User
   
    
 
}
