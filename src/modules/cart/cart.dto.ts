/* eslint-disable prettier/prettier */
export type CartDTO = {
  id: string;
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
  active: boolean;
};
