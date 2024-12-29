import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Product } from '../../products/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;
  }

  filterProducts() {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
      return;
    }

    const searchLower = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products
      .map((product) => ({
        product,
        relevance: this.getRelevanceScore(product.name, searchLower),
      }))
      .sort((a, b) => b.relevance - a.relevance)
      .map((item) => item.product);
  }

  private getRelevanceScore(productName: string, search: string): number {
    const nameLower = productName.toLowerCase();

    if (nameLower === search) return 100;

    if (nameLower.startsWith(search)) return 75;

    if (nameLower.includes(search)) return 50;
    return 0;
  }
}
