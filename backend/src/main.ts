import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix("api");

  app.useGlobalPipes(
    new ValidationPipe({
      //si envia datos que no estan en la lista valida tira error
      whitelist:true,
      forbidNonWhitelisted: true,
      //
      
      // transforma los datos siempre que pueda, por si llega un string, lo transforam en number
      transform: true
    })
  );
  
  await app.listen(3000);
}
bootstrap();
