import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../base/base.component';

import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { IziToastService, MessageType, Position } from '../../services/admin/izi-toast.service';
import { HttpErrorResponse } from '@angular/common/http';

declare var $:any;

@Directive({
  selector: '[appDelete]',
})
export class DeleteDirective {
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService:HttpClientService,
    private spinner:NgxSpinnerService,
    public dialog: MatDialog,
    private iziToast:IziToastService
  ) {
    
    const img=_renderer.createElement("img");
    img.setAttribute("src","../../../../../assets/Delete.png")
    img.setAttribute("style","cursor:pointer;");
    img.width=25;
    img.height=25;
    _renderer.appendChild(element.nativeElement,img);
  }

 @Input() id:string;
 @Input() controller:string;
 @Output() callback:EventEmitter<any>=new EventEmitter();
  
@HostListener("click")
 async onclick(){
  this.openDialog(async ()=>{this.spinner.show(SpinnerType.SquareSpin);
    const td:HTMLTableCellElement=this.element.nativeElement;
    await this.httpClientService.delete({controller:this.controller},this.id).subscribe(data=>{
      $(td.parentElement).animate({
        opacity:0,
        left:"+=50",
        height:"toogle"
      },700,()=>{this.callback.emit();
        this.iziToast.message("Silme İşlemi","Ürün başarıyla silinmiştir.",Position.TopCenter,MessageType.Success)
      })    
     },(errorResponse:HttpErrorResponse)=>{
      this.spinner.hide(SpinnerType.SquareSpin);
      this.iziToast.message("Silme İşlemi","Ürün silme işlemi başarısız.",Position.TopCenter,MessageType.Error)
     });
    });
  }
  openDialog(afterClosed:any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width:'250px',
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==DeleteState.Yes)
        afterClosed();
    });
  }
}

