import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import hbs = require('hbs');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views', 'partials'));
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
  app.enableCors({credentials: true, origin: allowedOrigins});
  
  await app.listen(3001);
}

bootstrap();
