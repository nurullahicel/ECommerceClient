import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    InputTextModule,
    RouterModule.forChild([{
      path:"",component:RegisterComponent
    }]),ReactiveFormsModule
  ]
})
export class RegisterModule { }
