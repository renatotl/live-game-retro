import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

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
@Module({})
export class AppModule {}
// o appModule que junto todo mundo
