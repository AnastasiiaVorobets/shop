import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: Product;
  @Output() removeItem: EventEmitter<void> = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  getQuantity(product: Product): number {
    return this.cartService.getQuantity(product);
  }

  onRemoveItem(): void {
    this.cartService.removeFromCart(this.product);
    this.removeItem.emit();
  }
}
