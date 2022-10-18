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
        active: true,
      },
    });
    return cart;
  }

  async getAll() {
    return await this.prisma.cart.findMany({
      where: {
        active: true,
      },
      include: {
        product: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

  async getOne(id: string) {
    const cart = await this.prisma.cart.findFirst({
      where: {
        id,
        active: true,
      },
      include: {
        product: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
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
        active: true,
      },
      include: {
        product: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
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
    const cart = await this.prisma.cart.update({
      where: {
        id,
      },
      data: {
        active: false,
      },
    });

    if (!cart) throw new Error('Produto não existe!');

    return cart;
  }
}
