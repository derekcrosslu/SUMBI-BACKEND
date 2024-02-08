import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    bufferLogs: true,
     
  });
  // app.useLogger(app.get(MyLogger));
  await app.listen(3000);
}
bootstrap();
