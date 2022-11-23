import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

//criando a aplicação através do AppModule
// uma função async vai rodar pra sempre no terminal
// ele tá fazendo um app.listen igual ao express
async function bootstrap() {
  // o NestFactory automaticamente coloca o service dentro do controller
  const app = await NestFactory.create(AppModule);

  // validate
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Live Game Retro')
    .setDescription('Aplicação para cadastramento de novos games')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
