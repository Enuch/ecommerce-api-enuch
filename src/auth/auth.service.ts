import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from 'src/modules/user/user.dto';
import { CartService } from 'src/modules/cart/cart.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private cartsService: CartService,
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

  async getByUser(id: string) {
    const cart = await this.cartsService.getByUser(id);
    if (!cart) return null;

    return cart;
  }
}
