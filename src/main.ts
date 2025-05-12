import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BigIntInterceptor } from './common/interceptors/bigint.interceptor';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Ativa CORS para permitir chamadas do frontend (ajuste os domínios em produção)
  app.enableCors({
    origin: '*', // Substitua por ['http://localhost:5173', 'https://recibo.georgton.tech'] em produção
    credentials: true,
  });

  // ✅ Interceptor para tratar BigInt no JSON (ex: IDs do banco)
  app.useGlobalInterceptors(new BigIntInterceptor());

  // ✅ Validação global com class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // Remove propriedades não permitidas
      forbidNonWhitelisted: true,  // Retorna erro se campos não esperados forem enviados
      transform: true,             // Faz transformações automáticas de tipo
    }),
  );

  await app.listen(3000);
}
bootstrap();
