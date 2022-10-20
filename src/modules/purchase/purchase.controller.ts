import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PurchaseDTO } from './purchase.dto';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Post()
  async create(@Body() data: PurchaseDTO) {
    return this.purchaseService.create(data);
  }

  @Get()
  async getAll() {
    return this.purchaseService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.purchaseService.getOne(id);
  }

  @Get('/history/:id')
  async getHistory(@Param('id') id: string) {
    return this.purchaseService.getHistory(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: PurchaseDTO) {
    return this.purchaseService.update(id, data);
  }

  @Put('/finish/:id')
  async finish(@Param('id') id: string) {
    return this.purchaseService.finish(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.purchaseService.delete(id);
  }
}
