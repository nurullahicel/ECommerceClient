import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: BasketComponent }]),
  ],
  exports:[BasketComponent]
})
export class BasketModule {}
