import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { IziToastService, MessageType, Position } from '../../../../services/admin/izi-toast.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit {
constructor(spinner:NgxSpinnerService,private productService:ProductService,private iziToast:IziToastService){
  super(spinner)
}
  ngOnInit(): void {
    
  }
create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement){
this.showSpinner(SpinnerType.SquareLoader)
const create_product:Create_Product=new Create_Product();
create_product.name=name.value;
create_product.stock=parseInt(stock.value);
create_product.price=parseFloat(price.value);

// /* #region Simple Validation */
// if(!name.value){
//   this.iziToast.message("Ürün Adı Hatası","Lütfen ürün adını giriniz.",Position.TopLeft,MessageType.Error);
//   return;
// }
// if(parseInt(stock.value)<0){
//   this.iziToast.message("Stock Hatası","Lütfen stock bilgisini doğru giriniz.",Position.TopLeft,MessageType.Error);
//   return;
// }
/* #endregion */




this.productService.create(create_product,()=>{
  this.hideSpinner(SpinnerType.SquareLoader),
  this.iziToast.message("Ürün Ekleme","Ürün başarı ile eklenmiştir",Position.Center,MessageType.Success)
},errorMessage=>{
  this.iziToast.message("ERROR",errorMessage,Position.TopRight,MessageType.Error);
});
};
}

