import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BasketModule } from './basket/basket.module';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    BasketModule,
    ProductsModule
  ]
})
export class ComponentsModule { }
