/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty, MaxLength } from 'class-validator';
export class ProductDTO {
  id: string;
  @IsNumber()
  price: number;
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  description: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  category: string;
  created_at: Date;
  active: boolean;
}
