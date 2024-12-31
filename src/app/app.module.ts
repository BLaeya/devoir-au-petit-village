import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsService } from './products/services/products.service';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { SortByPricePipe } from './pipes/sort-by-price.pipe';
import { FilterByNamePipe } from './pipes/filter-by-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ProductDetailComponent,
    SortByPricePipe,
    FilterByNamePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
