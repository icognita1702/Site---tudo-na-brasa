
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'churrasco' | 'guarnicoes' | 'bebidas';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  label: string;
}
