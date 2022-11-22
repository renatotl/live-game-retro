import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//criando a aplicação através do AppModule
// uma função async vai rodar pra sempre no terminal
// ele tá fazendo um app.listen igual ao express
async function bootstrap() {
  // o NestFactory automaticamente coloca o service dentro do controller
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
