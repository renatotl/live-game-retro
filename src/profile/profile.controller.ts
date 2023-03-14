import {BadRequestException, Controller, Get, Post, Body, Patch, Param, Delete, Res, } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PartialProfileDto } from './dto/update-profile.dto';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common/decorators';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

 // @UseGuards(AuthGuard())// quem de fato protege as rotas 
 // @ApiBearerAuth()
  @Post('createProfile')
  async createProfile(
    @Body() { title, imageURL, userId }: CreateProfileDto,
    @Res() response: Response,
  ): Promise<void> {
    // de IUserEntity troquie para void porque não tem return
    // se algo pode dar errado vai da errado. clen code
    try {
      const result = await this.profileService.create({
        title,
        imageURL,
        userId
      });

      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

 // @UseGuards(AuthGuard())// quem de fato protege as rotas 
 // @ApiBearerAuth()
  @Get('getAllProfile')
  async getAllProfile(@Res() response: Response): Promise<void> {
    // mesmo método do service
    try {
      const result = await this.profileService.findAll(); // esse ultime getAllUsers() é a função do banco
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

  @UseGuards(AuthGuard())// quem de fato protege as rotas 
  @ApiBearerAuth()
  @Get('getProfileById/:id')
  async getUserById(
    @Param('id') profileId: string,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const result = await this.profileService.getProfileById(profileId);
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

 // @UseGuards(AuthGuard())// quem de fato protege as rotas 
 // @ApiBearerAuth()
  @Patch('updateProfile')
  async updateProfile(
    @Body() profileData: PartialProfileDto,
    @Res() response: Response,
  ): Promise<void> {
    try {
      const result = await this.profileService.update(profileData);
      response.status(201).send(result);
    } catch (err) {
      console.log(err);
      response.status(400);
      throw new BadRequestException(err.message); // mensgem vem do service
    }
  }

 // @UseGuards(AuthGuard())// quem de fato protege as rotas 
 // @ApiBearerAuth()
  @Delete('deleteProfileById/:id')
  async deleteProfileById(@Param('id') profileId: string): Promise<string> {
    // promise de string
    try {
      const profileIdDeleted = await this.profileService.delete(profileId);
      console.log(profileIdDeleted);
      if (profileIdDeleted) {
        return 'Profile deletado com sucesso';
      } else {
        return 'Profile não encontrado';
      }
    } catch (err) {
      console.log(err);
    }
  }
}
