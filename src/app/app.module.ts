import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
