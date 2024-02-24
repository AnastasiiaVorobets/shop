import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss']
})
export class CartSidebarComponent implements OnInit {
  cartItems: Product[] = [];

  constructor(private cartService: CartService, private sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  closeCartSidebar(): void {
    this.sidebarService.closeSidebar();
  }
}
