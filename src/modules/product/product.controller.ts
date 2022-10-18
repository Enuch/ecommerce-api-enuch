import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDTO } from './product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() data: ProductDTO) {
    return this.productService.create(data);
  }

  @Get()
  async getAll() {
    return this.productService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.productService.getOne(id);
  }

  @Get('/byCategory/:id')
  async getByCategory(@Param('id') id: string) {
    return this.productService.getByCategory(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: ProductDTO) {
    return this.productService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
