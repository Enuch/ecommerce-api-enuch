/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { Delete, Put } from '@nestjs/common/decorators';

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
  getPurchaseHistoryByUser(@Request() req) {
    return this.authService.getPurchaseHistoryByUser(req.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/purchase/cart/:id')
  getCartByUser(@Request() req) {
    return this.authService.getCartByUser(req.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('purchase/user/:id')
  createPurchase(@Request() req) {
    return this.authService.create(req);
  }

  @UseGuards(JwtAuthGuard)
  @Put('purchase/finish/:id')
  finishPurchase(@Request() req) {
    return this.authService.finish(req.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('purchase/:id')
  updatePurchase(@Request() req) {
    return this.authService.update(req.id, req);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('purchase/:id')
  deletePurchase(@Request() req) {
    return this.authService.delete(req.id);
  }
}
