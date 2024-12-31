import { Product } from './../products/interfaces/product.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: Product[], searchTerm: string = ''): Product[] {
    console.log('Products:', products);
    console.log('SearchTerm:', searchTerm);
    if (!products) {
      return [];
    }
    if (!searchTerm) {
      return products;
    }
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
