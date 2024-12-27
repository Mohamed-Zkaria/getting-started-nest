import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
// import { LoggerMiddleware } from './middlewares/app/logger.middleware';
import { CatsController } from './cats/cats.controller';
import {logger} from "./middlewares/app/logger.middleware"

@Module({
  imports: [DogsModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}
