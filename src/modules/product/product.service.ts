import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: ProductDTO) {
    const product = await this.prisma.product.create({
      data: {
        description: data.description,
        category: data.category,
        price: data.price,
        active: true,
      },
    });
    return product;
  }

  async getAll() {
    return await this.prisma.product.findMany({
      where: {
        active: true,
      },
    });
  }

  async getOne(id: string) {
    const product = await this.prisma.product.findFirst({
      where: {
        id,
        active: true,
      },
    });

    if (!product) throw new Error('Produto não existe!');

    return product;
  }

  async update(id: string, data: ProductDTO) {
    const product = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        description: data.description,
        category: data.category,
        price: data.price,
      },
    });

    if (!product) throw new Error('Produto não existe!');

    return product;
  }

  async delete(id: string) {
    const product = await this.prisma.product.update({
      where: {
        id,
      },
      data: {
        active: false,
      },
    });

    if (!product) throw new Error('Produto não existe!');

    return product;
  }
}
