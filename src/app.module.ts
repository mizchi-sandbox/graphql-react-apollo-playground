import { PhotoService } from './photo/photo.service';
import { PhotoController } from './photo/photo.controller';
import { Module } from '@nestjs/common';
import { HomeController } from './home/home.controller';
import { databaseProviders } from './database/database.providers';
import { photoProviders } from './photo/photo.providers';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HomeController, PhotoController],
  providers: [...databaseProviders, ...photoProviders, PhotoService],
})
export class AppModule {}
