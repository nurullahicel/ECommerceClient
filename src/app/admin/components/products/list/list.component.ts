import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { IziToastService, MessageType, Position } from '../../../../services/admin/izi-toast.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends BaseComponent implements OnInit{
  constructor(private productService:ProductService,spinner:NgxSpinnerService,private iziToast:IziToastService){
    super(spinner)
  }
  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate','updatedDate'];
  dataSource  :MatTableDataSource<List_Product>=null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  async ngOnInit() {
    await this.getProducts();
  }

  async getProducts(){
    this.showSpinner(SpinnerType.SquareSpin)
  let allProducts:List_Product[] =await this.productService.read(this.paginator?this.paginator.pageIndex : 0,this.paginator ? this.paginator.pageSize : 5,()=>this.hideSpinner(SpinnerType.SquareSpin),errorMessage=>this.iziToast.message("Hata",errorMessage,Position.Center,MessageType.Error));
  this.dataSource = new MatTableDataSource<List_Product>(allProducts);
 this.dataSource=new MatTableDataSource<List_Product>(allProducts);
    this.dataSource.paginator=this.paginator;
  }


 
  
}
