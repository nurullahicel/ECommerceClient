import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { BasketService } from '../../../services/common/models/basket.service';
import { List_Basket_Item } from '../../../contracts/basket/list_basket_item';
import { Update_Basket_Item } from '../../../contracts/basket/update_basket_item';

declare var $:any;
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService,private basketService:BasketService) {
    super(spinner);
  }


  basketItems:List_Basket_Item[];
  async ngOnInit() : Promise<void> {
    this.showSpinner(SpinnerType.SquareLoader);
    this.basketItems=await this.basketService.get();
    this.hideSpinner(SpinnerType.SquareLoader);
  }
  async changeQuantity(object:any){
    this.showSpinner(SpinnerType.SquareLoader);
    const basketItemId:string=object.target.attributes["id"].value;
    const quantity:number=object.target.value;
    const basketItem:Update_Basket_Item=new Update_Basket_Item();
    basketItem.basketItemId=basketItemId;
    basketItem.quantity=quantity;
    await this.basketService.updateQuantity(basketItem)
    this.hideSpinner(SpinnerType.SquareLoader);
  }

  async removeBasketItem(basketItemId:string){
    this.showSpinner(SpinnerType.SquareLoader);

     
      this.basketService.remove(basketItemId);
      $("."+basketItemId).fadeOut(1000,()=> this.hideSpinner(SpinnerType.SquareLoader));

   
  }
}
