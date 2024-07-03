import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BasketModule } from './basket/basket.module';
import { ProductsModule } from './products/products.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    BasketModule,
    ProductsModule,
    RegisterModule    
  ],
  exports:[BasketModule]
})
export class ComponentsModule { }
