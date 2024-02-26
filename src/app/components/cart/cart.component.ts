import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(product: Product): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  goToHomePage(): void {
    this.router.navigate(['/']);
  }
}
