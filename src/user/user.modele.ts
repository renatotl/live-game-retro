import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { DatabaseModule } from "src/prisma/database.module";
import { UserController } from "./controller.user/user.controller";
import { UserRepository } from "./entities/user.repository";
import { UserService } from "./entities/user.service";




@Module({
    imports: [DatabaseModule, PassportModule.register({ defaultStrategy: 'jwt'}) ],
    controllers: [UserController],
    providers: [UserService,UserRepository],
})

export class UserModule {}