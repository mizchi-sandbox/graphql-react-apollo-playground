import { Controller, Get, Header, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `${id} cat`;
  }

  @Get()
  // @Header('Cache-Control', 'none')
  async findAll(): Promise<string[]> {
    return ['Hello'];
  }
}
