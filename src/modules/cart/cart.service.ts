import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CartDTO } from './cart.dto';

@Injectable()
export class cartService {
  constructor(private prisma: PrismaService) {}

  async create(data: CartDTO) {
    const cart = await this.prisma.cart.create({
      data,
    });
    return cart;
  }

  async getAll() {
    return await this.prisma.cart.findMany({});
  }

  async getOne(id: string) {
    const cart = await this.prisma.cart.findMany({
      where: {
        id,
      },
    });

    if (!cart) throw new Error('Produto não existe!');

    return cart;
  }

  async update(id: string, data: CartDTO) {
    const cart = await this.prisma.cart.update({
      where: {
        id,
      },
      data,
    });

    if (!cart) throw new Error('Produto não existe!');

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
