import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { SignalRService } from '../../../services/common/signalr.service';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,   
    RouterModule.forChild([
      {path:"",component:DashboardComponent}
    ])
  ]
})
export class DashboardModule { }
