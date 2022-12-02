import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';

// importando o prismaService
import {PrismaService} from '../prisma/prisma.service'
// importando o reposytory

@Module({
  controllers: [ProfileController],
  providers: [ProfileService,PrismaService]
})
export class ProfileModule {}
