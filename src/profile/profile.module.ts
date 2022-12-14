import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { DatabaseModule } from '../prisma/database.module';
// importando o prismaService
import {PrismaService} from '../prisma/prisma.service'
import { ProfileRepository } from './entities/profile.repository';
import { PassportModule } from '@nestjs/passport';
// importando o reposytory

// sempre é bom pegar o DatabaseModule ao invez do PrismaService. Ele é mais completo. 
@Module({
  imports: [DatabaseModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [ProfileController ],
  providers: [ProfileService,ProfileRepository]
})
export class ProfileModule {}
