import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BasketModule } from './basket/basket.module';
import { ProductsModule } from './products/products.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    BasketModule,
    ProductsModule,
    RegisterModule,
    LoginModule
  ]
})
export class ComponentsModule { }
