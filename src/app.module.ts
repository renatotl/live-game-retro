import { Module } from '@nestjs/common';
import { DatabaseModule } from './prisma/database.module';
import { UserController } from './user/controller.user/user.controller';
// import { GameService } from './game/games.service';
import { UserRepository } from './user/entities/user.repository';
import { UserService } from './user/entities/user.service';
// import { GameController } from './game/game.controller/game.controller';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { ModuleGame } from './game/game.module';
import { GeneroModule } from './genero/genero.module';
import { UserModule } from './user/user.modele';

//decorator tendo o  controller e service
// o controller é o cara que controla as rotas
// service trabalha com o banco e oferece conteúdo

// o decorate segue o Open Closed Principle/ ele altera o comportamento de algo na class sem precisar mecher no code/ estamos usando os decoratos do NEST, mas podemos criar os nossos
/*ANTIGO
@Module({
  imports: [],// listta
  controllers: [AppController],// lista/ se tiver outro controller ele tbm recebe
  providers: [AppService],// lista / provendo para o controller
  // uma cass dentro de outra
})
*/

// o Module é como a nossa FACTORY deposi que criamos o controller e service precisamos montar aqui
@Module({
  imports: [DatabaseModule, ProfileModule, ModuleGame, GeneroModule,UserModule], // precisa conhecer o prisma

})
export class AppModule {}
// o appModule que junto todo mundo

// as vezes passamos o ConfigModule.forRoot(), dentro no imports porque ele pode não reconhecer o dot.env


/* ANTIGO 
@Module({
  imports: [DatabaseModule, ProfileModule, ModuleGame, GeneroModule], // precisa conhecer o prisma
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class AppModule {}
*/