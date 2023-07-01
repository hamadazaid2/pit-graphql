import { MiddlewareConsumer, Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { requestLoggerMiddleware } from './common/middlewares/cls.middleware';
import { ConfigModule } from '@nestjs/config';
import config from '../config';
import { JwtModule } from '@nestjs/jwt';
import { PetModule } from './modules/pet/pet.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { OwnerModule } from './modules/owner/owner.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
      sortSchema: true,
    }),

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
    PetModule,
    OwnerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(requestLoggerMiddleware).forRoutes('*');
  }
}
