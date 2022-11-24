
import {   Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
import { get } from 'http';

import { UserService } from "../entities/user.service";
import{ PartialGameDto } from "../service/dto/partialUserInput.Dto"

@Controller()
export class UserController {
    
 constructor(private serviceUser: UserService){
    
 }


 @Get()
 findAll(){
    return this.serviceUser
 }


 @Post()
 createUser(){
      return this.serviceUser
 }

 @Patch()
 updateUser(){
    return this.serviceUser
 }

 @Delete()
 deleteUser(){
   return this.serviceUser
 }


}