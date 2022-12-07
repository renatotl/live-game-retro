import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';

// importando o prismaService
import {PrismaService} from '../prisma/prisma.service'
import { ProfileRepository } from './entities/profile.repository';
// importando o reposytory

@Module({
  controllers: [ProfileController],
  providers: [ProfileService,PrismaService,ProfileRepository]
})
export class ProfileModule {}
