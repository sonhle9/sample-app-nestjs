import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigins = [
    'http://localhost:3000', 
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:4200',
    'http://localhost:8080',
    'https://railstutorialreact.herokuapp.com',
    'https://boiling-depths-89533.herokuapp.com',
    'https://sample-app-nextjs.vercel.app',
  ];
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({credentials: true, origin: allowedOrigins});
  await app.listen(3001);
}
bootstrap();
