import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartDTO } from './cart.dto';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() data: CartDTO) {
    return this.cartService.create(data);
  }

  @Get()
  async getAll() {
    return this.cartService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.cartService.getOne(id);
  }

  @Get('/lista/:id')
  async getByUser(@Param('id') id: string) {
    return this.cartService.getByUser(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: CartDTO) {
    return this.cartService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.cartService.delete(id);
  }
}
