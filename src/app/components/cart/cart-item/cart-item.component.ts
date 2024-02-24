import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() product!: Product;
  @Output() removeItem = new EventEmitter<Product>();

  constructor() { }

  onRemoveItem(): void {
    this.removeItem.emit(this.product);
  }
}
