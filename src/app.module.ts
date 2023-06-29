import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { requestLoggerMiddleware } from './common/middlewares/cls.middleware';
import { ConfigModule } from '@nestjs/config';
import config from '../config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      load: config,
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRETE,
      signOptions: { expiresIn: process.env.JWT_EXPIRES },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(requestLoggerMiddleware).forRoutes('*');
  }
}
