import { ProductsService } from './../products/services/products.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../products/interfaces/product.interface';
@Pipe({
  name: 'sortByPrice',
})
export class SortByPricePipe implements PipeTransform {
  transform(products: Product[], direction: 'asc' | 'desc' | null): Product[] {
    if (!products) {
      return [];
    }

    return [...products].sort((a: Product, b: Product) => {
      if (direction === 'asc') {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
  }
}
