import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    const user = await this.prisma.user.create({
      data,
    });

    return user;
  }

  async getAll() {
    return await this.prisma.user.findMany({});
  }

  async getOne(id: string) {
    return await this.prisma.user.findMany({
      where: {
        id,
      },
    });
  }

  async update(id: string, data: UserDTO) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
    return user;
  }

  async delete(id: string) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  }
}
