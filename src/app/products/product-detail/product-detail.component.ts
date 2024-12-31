import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from './../interfaces/product.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.ProductsService.getProductById(id);
  }
}
