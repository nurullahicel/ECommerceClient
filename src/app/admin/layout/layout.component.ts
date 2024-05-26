import { Component, OnInit } from '@angular/core';
import { IziToast } from 'izitoast';
import { IziToastService, MessageType, Position } from '../../services/admin/izi-toast.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
constructor(private iziToast:IziToastService){

}
  ngOnInit(): void {
 
  }
  m(){
    this.iziToast.message("Hello","welcome");
  }


 
}
