export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  addedToCart: boolean;
  quantityInCart: number;
}
