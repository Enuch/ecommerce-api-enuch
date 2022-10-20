import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PurchaseDTO } from './purchase.dto';

@Injectable()
export class PurchaseService {
  constructor(private prisma: PrismaService) {}

  async create(data: PurchaseDTO) {
    const purchase = await this.prisma.purchase.create({
      data: {
        product_id: data.product.id,
        user_id: data.user.id,
        status: 1,
      },
    });
    return purchase;
  }

  async getAll() {
    return await this.prisma.purchase.findMany({
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
    const purchase = await this.prisma.purchase.findFirst({
      where: {
        id,
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

    if (!purchase) throw new Error('Carrinho não existe!');

    return purchase;
  }

  async getHistory(id: string) {
    const purchase = await this.prisma.purchase.findMany({
      where: {
        user: {
          id,
        },
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

    if (!purchase) throw new Error('Carrinho não existe!');

    return purchase;
  }

  async getCart(id: string) {
    const purchase = await this.prisma.purchase.findMany({
      where: {
        user: {
          id,
        },
        status: 1,
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

    if (!purchase) throw new Error('Carrinho não existe!');

    return purchase;
  }

  async finish(id: string) {
    const purchase_status = await this.prisma.purchase.findUnique({
      where: {
        id: id,
      },
    });

    if (purchase_status.status !== 1)
      throw Error(
        'A compra já está finalizada ou cancela, não é possivel concluir a operação',
      );

    const purchase = await this.prisma.purchase.update({
      where: {
        id: id,
      },
      data: {
        status: 2,
        finished_at: new Date(),
      },
    });

    if (!purchase) throw new Error('Carrinho não existe!');

    return purchase;
  }

  async update(id: string, data: PurchaseDTO) {
    const purchase = await this.prisma.purchase.update({
      where: {
        id,
      },
      data: {
        product_id: data.product.id,
        user_id: data.user.id,
      },
    });

    if (!purchase) throw new Error('Carrinho não existe!');

    return purchase;
  }

  async delete(id: string) {
    const purchase = await this.prisma.purchase.update({
      where: {
        id,
      },
      data: {
        status: 3,
        finished_at: new Date(),
      },
    });

    if (!purchase) throw new Error('Produto não existe!');

    return purchase;
  }
}
