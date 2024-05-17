import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import session from 'express-session';
import * as dotenv from 'dotenv';
import { sessionConfig } from '../session/session.config';
dotenv.config({path: '.env.development.local'})

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type',
    'Authorization',
    'Accept',
    'Accept-Encoding',
    'Accept-Language',
    'Cache-Control',
    'If-Match',
    'If-Modified-Since',
    'If-None-Match',
    'If-Unmodified-Since',
    'User-Agent',],
    credentials: true,
  });
  sessionConfig(app);
  const config = new DocumentBuilder()
  .setTitle('Bulk Merchant Requisition Portal')
  .setDescription('The Bulk Merchant Portal')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('/', app, document);
  await app.listen(5000);
}
export default bootstrap();
