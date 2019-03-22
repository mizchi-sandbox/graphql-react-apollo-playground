import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Photo } from '../entity/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async addNew(): Promise<any> {
    const instance: Photo = {
      id: undefined,
      name: 'Hello',
      description: 'desc',
      filename: 'hello.png',
      views: 0,
      isPublished: true,
    };
    // const result = await this.photoRepository.create(instance);
    const ret = await this.photoRepository.insert(instance);
    return ret;
  }
}
