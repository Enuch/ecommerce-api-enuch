import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/modules/user/user.dto';
import { PurchaseService } from 'src/modules/purchase/purchase.service';
import { PurchaseDTO } from 'src/modules/purchase/purchase.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private purchaseService: PurchaseService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user: UserDTO = await this.usersService.login(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserDTO) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getCartByUser(id: string) {
    const purchase = await this.purchaseService.getCart(id);
    if (!purchase) return null;

    return purchase;
  }

  async getPurchaseHistoryByUser(id: string) {
    const purchase = await this.purchaseService.getHistory(id);
    if (!purchase) return null;

    return purchase;
  }

  async finish(id: string) {
    const purchase = await this.purchaseService.finish(id);
    if (!purchase) return null;

    return purchase;
  }

  async create(data: PurchaseDTO) {
    const purchase = await this.purchaseService.create(data);
    if (!purchase) return null;

    return purchase;
  }

  async update(id: string, data: PurchaseDTO) {
    const purchase = await this.purchaseService.update(id, data);
    if (!purchase) return null;

    return purchase;
  }

  async delete(id: string) {
    const purchase = await this.purchaseService.delete(id);
    if (!purchase) return null;

    return purchase;
  }
}
