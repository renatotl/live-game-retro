import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//criando a aplicação através do AppModule
// uma função async vai rodar pra sempre no terminal
// ele tá fazendo um app.listen igual ao express
async function bootstrap() {
  // o NestFactory automaticamente coloca o service dentro do controller
  const app = await NestFactory.create(AppModule, {cors: true});// habilitando o cors

  // validate
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Live Game Retro')
    .setDescription('Aplicação para cadastramento de novos games')
    .setVersion('1.0.0')
    .addTag('user')
    .addTag('games')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
//http://localhost:3000/api  .... para ver o swagger
await app.listen(process.env.PORT || 3000);

}
bootstrap();
