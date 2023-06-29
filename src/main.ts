import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CustomeLogger } from './common/logger';
import { HttpExceptionFilter } from './common/exception-filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomeLogger(),
  });

  //
  app.useGlobalGuards();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new HttpExceptionFilter(app.get(HttpAdapterHost)));
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
