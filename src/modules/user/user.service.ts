import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: UserDTO) {
    const userCPF = await this.prisma.user.findFirst({
      where: {
        cpf: data.cpf,
      },
    });

    const userEmail = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (userCPF) throw new Error('O CPF já está cadastrado!');
    if (userEmail) throw new Error('O e-mail já está cadastrado!');

    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        birthday: data.birthday,
        active: true,
      },
    });

    return user;
  }

  async getAll() {
    return await this.prisma.user.findMany({
      where: {
        active: true,
      },
    });
  }

  async getOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
        active: true,
      },
    });

    if (!user) throw new Error('Usuário não existe!');

    return user;
  }

  async login(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        active: true,
      },
    });

    if (!user) throw new Error('Usuário não existe!');

    return user;
  }

  async update(id: string, data: UserDTO) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        birthday: data.birthday,
      },
    });

    if (!user) throw new Error('Usuário não existe!');

    return user;
  }

  async delete(id: string) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        active: false,
      },
    });

    if (!user) throw new Error('Usuário não existe!');

    return user;
  }
}
