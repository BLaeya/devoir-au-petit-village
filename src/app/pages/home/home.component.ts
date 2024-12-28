import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/services/products.service';
import { Product } from '../../products/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.ProductsService.getProducts();
  }
}
