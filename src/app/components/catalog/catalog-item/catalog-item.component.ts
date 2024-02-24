import { Component, Input } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss'],
  providers: [CartService]
})

export class CatalogItemComponent {
  @Input() product!: Product;

  constructor(private cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log(product)
  }
}
