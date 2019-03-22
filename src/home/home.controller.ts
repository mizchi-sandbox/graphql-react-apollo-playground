import { Controller, Get } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  getHello(): string {
    return 'Hello';
  }
}
