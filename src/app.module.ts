import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//decorator tendo o  controller e service
// o controller é o cara que controla as rotas 
// service trabalha com o banco e oferece conteúdo
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// o appModule que junto todo mundo 