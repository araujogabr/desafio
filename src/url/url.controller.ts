import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { URLService } from './url.service';
import { URL } from './url.entity';
import { CreateUrlDto } from 'src/dtos/create-url.dto';

@Controller('urls')
export class URLController {
  constructor(private readonly urlService: URLService) {}

  @Get()
  findAll(): Promise<URL[]> {
    return this.urlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<URL> {
    return this.urlService.findOne(parseInt(id, 10));
  }

  @Post()
  create(@Body() urlData: Partial<URL>): Promise<URL> {
    return this.urlService.create(urlData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() urlData: Partial<URL>): Promise<boolean> {
    return this.urlService.update(parseInt(id, 10), urlData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<boolean> {
    return this.urlService.remove(parseInt(id, 10));
  }

  @Post()
  async createUrl(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }
}
