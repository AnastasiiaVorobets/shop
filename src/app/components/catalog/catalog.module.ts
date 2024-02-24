import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CartSidebarComponent } from '../cart-sidebar/cart-sidebar.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogItemComponent,
    CartSidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
