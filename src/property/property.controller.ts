import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'hello all propery';
  }

  @Get(':id/:slug')
  findOne(@Param('id') id, @Param('slug') slug): any {
    return `id = ${id} and slug = ${slug}`;
  }

  @Post()
  @HttpCode(202)
  create(@Body('name') name): any {
    return name;
  }
}
