import { Controller, Get, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'hello all propery';
  }

  @Post()
  create() {
    return 'this is post property api';
  }
}
