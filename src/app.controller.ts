/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Body, Delete, Param, Put } from '@nestjs/common/decorators';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/purchase/history/:id')
  getPurchaseHistoryByUser(@Param('id') id) {
    return this.authService.getPurchaseHistoryByUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/purchase/cart/:id')
  getCartByUser(@Param('id') id) {
    return this.authService.getCartByUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('purchase/user/:id')
  createPurchase(@Request() req) {
    return this.authService.create(req);
  }

  @UseGuards(JwtAuthGuard)
  @Put('purchase/finish/:id')
  finishPurchase(@Param('id') id) {
    return this.authService.finish(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('purchase/:id')
  updatePurchase(@Param('id') id, @Body() data) {
    return this.authService.update(id, data);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('purchase/:id')
  deletePurchase(@Param('id') id) {
    return this.authService.delete(id);
  }
}
