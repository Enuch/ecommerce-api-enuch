import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: ProductDTO) {
    const product = await this.prisma.product.create({
      data,
    });
    return product;
  }

  async getAll() {
    return await this.prisma.product.findMany({});
  }

  async getOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
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
      data,
    });

    if (!product) throw new Error('Produto não existe!');

    return product;
  }

  async delete(id: string) {
    const product = await this.prisma.product.delete({
      where: {
        id,
      },
    });

    if (!product) throw new Error('Produto não existe!');

    return product;
  }
}
