export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  label: string;
}

export interface GoogleReview {
  author: string;
  meta: string;
  time: string;
  rating: number;
  source: string;
  review: string;
}
