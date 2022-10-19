import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { CartModule } from './modules/cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [UserModule, ProductModule, CartModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
