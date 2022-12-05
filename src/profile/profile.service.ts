import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { PartialProfileDto } from './dto/update-profile.dto';
import { IProfileEntity } from './entities/profile.entity';
import { ProfileRepository } from './entities/profile.repository';


@Injectable()
export class ProfileService {

  constructor(private readonly profileRepository: ProfileRepository) {}


async  create(profile: CreateProfileDto): Promise<IProfileEntity> {
    // recebe tudo do user mais um id gerado pelo node
    const profileEntity = { ...profile, id: randomUUID() };// createAt: Date.now()// essa função vem do schema.prisma e retorna quando foi criado
   
    if (!profile.title || !profile.imageURL) {
      throw new Error('Prenecha todos os campos. Exemplo: título, imageURL.');
    }
    const createdProfile = await this.profileRepository.createProfile(profileEntity);
    return createdProfile;  
  }



 async findAll() {
    const value = await this.profileRepository.getAllProfile()

    if (value.length < 1) {
      throw new Error('Não existe profiles cadastrados!');
    }
    return await this.profileRepository.getAllProfile(); 
   }



  async getProfileById(profileId: string): Promise<IProfileEntity> {
    const foundProfile = await this.profileRepository.findProfileById(profileId);
    if(!foundProfile){
      throw new Error("Profile não encontrado")
    }
    return foundProfile; 
   }


async  update(profileData:PartialProfileDto): Promise<IProfileEntity> {
      await this.profileRepository.findProfileById(profileData.id)
    const updatedProfile = await this.profileRepository.updateProfile(profileData);
    if (!updatedProfile.id ) {
      throw new Error('Id inválido!');
      }
    return updatedProfile;  }

  async delete(profileId: string) {
    try {
      await this.profileRepository.findProfileById(profileId)
      
      await this.profileRepository.deleteProfile(profileId);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
    }
}
