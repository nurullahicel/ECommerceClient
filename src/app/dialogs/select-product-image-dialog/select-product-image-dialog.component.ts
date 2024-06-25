import { Component, Inject, OnInit, Output } from '@angular/core';
import { BaseDialog } from '../base/base-dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FileUploadOptions } from '../../services/common/fileupload/fileupload.component';
import { ProductService } from '../../services/common/models/product.service';
import { List_Product_Image } from '../../contracts/list_product_image';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';
import { DialogService } from '../../services/common/dialog.service';
import { DeleteDialogComponent, DeleteState } from '../delete-dialog/delete-dialog.component';

declare var $:any

@Component({
  selector: 'app-select-product-image-dialog',
  templateUrl: './select-product-image-dialog.component.html',
  styleUrl: './select-product-image-dialog.component.scss'
})
export class SelectProductImageDialogComponent extends BaseDialog<SelectProductImageDialogComponent> implements OnInit {

constructor(dialogRef:MatDialogRef<SelectProductImageDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data:SelectProductImageState | string,
  private productService:ProductService,
private spinner:NgxSpinnerService,
private dialogService:DialogService){
  super(dialogRef)
}
  



@Output() options:Partial<FileUploadOptions>={
  accept:".png, .jpg, .jpeg, .gif",
  action:"upload",
  controller:"products",
  explanation:"Ürün resmini seçin veya buraya sürükleyin...",
  isAdminPage:true,
  queryString:`id=${this.data}`
};

images:List_Product_Image[];

async ngOnInit()  {
  this.spinner.show(SpinnerType.SquareSpin);
    this.images= await  this.productService.readImages(this.data as string,()=>this.spinner.hide(SpinnerType.SquareSpin));

}
async deleteImage(imageId:string,event){


  this.dialogService.openDialog({
    componentType:DeleteDialogComponent,
    data:DeleteState.Yes,
    afterClosed:async ()=>{
      this.spinner.show(SpinnerType.SquareSpin)
      await this.productService.deleteImage(this.data as string,imageId,()=>{
        this.spinner.hide(SpinnerType.SquareSpin);
        var card=$(event.srcElement).parent().parent().parent();
        card.fadeOut(500);
      })
    }
  })

}
showCase(imageId:string){
  this.spinner.show(SpinnerType.SquareLoader);
this.productService.changeShowcaseImage(imageId,this.data as string,()=>{
this.spinner.hide(SpinnerType.SquareLoader)
})
}
}


export enum SelectProductImageState{
  Close
}