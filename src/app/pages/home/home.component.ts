import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Product } from '../../products/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = '';
  sortDirection: 'asc' | 'desc' | null = null;

  onSearchChange(term: string) {
    this.searchTerm = term;
  }
  sortAscending() {
    this.sortDirection = 'asc';
  }
  sortDescending() {
    this.sortDirection = 'desc';
  }

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
