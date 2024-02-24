import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SidebarService } from '../../services/sidebar.service';
import { Product } from '../../types/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  sortedProducts: Product[] = [];
  sortCriteria: string = 'title';
  sortDirection: string = 'asc';
  visibleProductCount: number = 8;

  constructor(private http: HttpClient, public sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(
        products => {
          if (products && products.length > 0) {
            this.products = products;
            this.sortProducts();
          } else {
            console.error('No products found in the response.');
          }
        },
        error => {
          console.error('Error fetching products:', error);
        }
      );
  }

  sortProducts(): void {
    this.sortedProducts = [...this.products];
    switch (this.sortCriteria) {
      case 'title':
        this.sortedProducts.sort((a, b) => {
          return this.sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        });
        break;
      case 'price':
        this.sortedProducts.sort((a, b) => {
          return this.sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
        });
        break;
      default:
        break;
    }
  }

  setSortCriteria(criteria: string): void {
    if (this.sortCriteria === criteria) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }
    else {
      this.sortDirection = 'asc';
    }
    this.sortCriteria = criteria;
    this.sortProducts();
  }

  openCartSidebar(): void {
    this.sidebarService.toggleSidebarVisibility();
  }

  showMoreProducts(): void {
    this.visibleProductCount += 4;
  }

  get remainingProducts(): number {
    if (!this.products) return 0;
    return Math.max(this.products.length - this.visibleProductCount, 0);
  }
}
