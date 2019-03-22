import { Photo } from './../entity/photo.entity';
import { PhotoService } from './photo.service';
import { Controller, Get, Inject } from '@nestjs/common';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('add')
  async add(): Promise<Photo> {
    // console.log(this.photoService);
    return this.photoService.addNew();
  }

  @Get()
  async getHello(): Promise<Photo[]> {
    // console.log(this.photoService);
    return this.photoService.findAll();
  }
}
