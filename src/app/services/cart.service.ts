import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cartItems';
  constructor() { }

  addToCart(product: Product): void {
    let cartItems = this.getCartItems();
    cartItems.push(product);
    this.saveCartItems(cartItems);
  }

  removeFromCart(product: Product): void {
    let cartItems = this.getCartItems();
    cartItems = cartItems.filter(item => item.id !== product.id);
    this.saveCartItems(cartItems);
  }

  getCartItems(): Product[] {
    const cartItemsString = localStorage.getItem(this.cartKey);
    return cartItemsString ? JSON.parse(cartItemsString) : [];
  }

  private saveCartItems(cartItems: Product[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cartItems));
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}
