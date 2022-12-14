import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";
import { CreateProfileDto } from "../dto/create-profile.dto";
import { PartialProfileDto } from "../dto/update-profile.dto";
import { IProfileEntity } from "./profile.entity";



@Injectable()
export class ProfileRepository {
    constructor(private readonly prisma: PrismaService) {}

    async createProfile(profile: CreateProfileDto): Promise<IProfileEntity>{
        console.log(profile)
     const createProfile = await  this.prisma.profile.create({ 
        
        data: profile })
        console.log(profile)
     return createProfile
    }


/* ANTIGO
    async createProfile(profile: CreateProfileDto): Promise<IProfileEntity>{ 
        const createProfile = await  this.prisma.profile.create({ data: profile })
        return createProfile
       }
       */


    async updateProfile(profile: PartialProfileDto): Promise<IProfileEntity>{
     
        const updatedProfile = await this.prisma.profile.update({
            where: { id: profile.id },// onde
            data: profile// os dados que quero colocar 
        })
        return updatedProfile
    }

    async getAllProfile(): Promise<IProfileEntity[]>{
       const result = await this.prisma.profile.findMany()
       return result
    }

    async deleteProfile(id: string): Promise<IProfileEntity> {
        const deletedProfile = await this.prisma.profile.delete({
            where: { id: id }
          });
          return deletedProfile;
    }

    async findProfileById(id: string): Promise<IProfileEntity>{
        const foundProfile = await this.prisma.profile.findUniqueOrThrow({
            // onde
            where: { id: id },
          });
          return foundProfile;
    }
}