/* eslint-disable prettier/prettier */
import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO {
  id: string;
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  @IsNotEmpty()
  name: string;
  @IsString()
  @MinLength(10, { message: 'O CPF precisa ter 10 números, ex: 1234567890' })
  @MaxLength(10, { message: 'O CPF precisa ter 10 números, ex: 1234567890' })
  @IsNotEmpty()
  cpf: string;
  @IsDateString()
  birthday: Date;
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
  created_at: Date;
  active: boolean;
}
