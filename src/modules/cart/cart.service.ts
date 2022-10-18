import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CartDTO } from './cart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async create(data: CartDTO) {
    const cart = await this.prisma.cart.create({
      data: {
        product_id: data.product.id,
        user_id: data.user.id,
      },
    });
    return cart;
  }

  async getAll() {
    return await this.prisma.cart.findMany({
      include: {
        product: true,
        user: true,
      },
    });
  }

  async getOne(id: string) {
    const cart = await this.prisma.cart.findUnique({
      where: {
        id,
      },
      include: {
        product: true,
        user: true,
      },
    });

    if (!cart) throw new Error('Carrinho não existe!');

    return cart;
  }

  async getByUser(id: string) {
    const cart = await this.prisma.cart.findMany({
      where: {
        user: {
          id,
        },
      },
      include: {
        product: true,
        user: true,
      },
    });

    if (!cart) throw new Error('Carrinho não existe!');

    return cart;
  }

  async update(id: string, data: CartDTO) {
    const cart = await this.prisma.cart.update({
      where: {
        id,
      },
      data: {
        product_id: data.product.id,
        user_id: data.user.id,
      },
    });

    if (!cart) throw new Error('Carrinho não existe!');

    return cart;
  }

  async delete(id: string) {
    const cart = await this.prisma.cart.delete({
      where: {
        id,
      },
    });

    if (!cart) throw new Error('Produto não existe!');

    return cart;
  }
}
