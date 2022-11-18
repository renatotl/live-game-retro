import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//criando a aplicação através do AppModule
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
