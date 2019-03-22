import { Module } from '@nestjs/common';
import { HomeController } from './home/home.controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [HomeController, CatsController],
  providers: [],
})
export class AppModule {}
