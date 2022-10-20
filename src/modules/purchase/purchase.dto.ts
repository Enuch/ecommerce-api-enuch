/* eslint-disable prettier/prettier */

export class PurchaseDTO {
  id: string;
  product_id: string;
  user_id: string;
  product: {
    id: string;
    preco: number;
    description: string;
    category: string;
    created_at: Date;
  };
  user: {
    id: string;
    name: string;
    cpf: string;
    birthday: Date;
    email: string;
    created_at: Date;
  };
  status: string;
  created_at: Date;
  finished_at: Date;
  active: boolean;
}
