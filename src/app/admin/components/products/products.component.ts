import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Create_Product } from '../../../contracts/create_product';
import { ListComponent } from './list/list.component';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent extends BaseComponent implements OnInit {
/* #region Post  */
// this.httpClientServer
//   .post(
//     { controller: 'products' },
//     {
//       name: 'Kalem',
//       stock: 100,
//       price: 15,
//     }
//   )
//   .subscribe();
// this.httpClientServer
//   .post(
//     { controller: 'products' },
//     {
//       name: 'kağıt',
//       stock: 1000,
//       price: 5,
//     }
//   )
//   .subscribe();
// this.httpClientServer
//   .post(
//     { controller: 'products' },
//     {
//       name: 'Kalem',
//       stock: 50,
//       price: 3.5,
//     }
//   )
//   .subscribe();
// this.httpClientServer
//   .post(
//     { controller: 'products' },
//     {
//       name: 'defter',
//       stock: 30,
//       price: 15,
//     }
//   )
//   .subscribe();
// this.httpClientServer
//   .post(
//     { controller: 'products' },
//     {
//       name: 'uç',
//       stock: 300,
//       price: 1,
//     }
//   )
//   .subscribe();
/* #endregion */
/* #region Put */
// this.httpClientServer.put(
//       { controller: 'products' },
//       {
//         id:"8cbb95b7-04a2-44a1-b75e-82c6bee384f3",
//         name: 'A4',
//         stock: 1200,
//         price: 15
//       }
//     ).subscribe();
/* #endregion */
// /* #region delete */
// this.httpClientServer.delete(
//         { controller: 'products' },"fe7240a8-e385-4092-a254-d7628b401176"
// ).subscribe();
/* #endregion */
/* #region placeholder */
//  this.httpClientServer.get({
//   baseUrl:"https://jsonplaceholder.typicode.com",
//   controller:"posts"
//  }).subscribe(data=>console.log(data));
/* #endregion */

  constructor(
    spinner: NgxSpinnerService,
    private httpClientServer: HttpClientService
  ) {
    super(spinner);
  }





  ngOnInit(): void {
    // this.showSpinner(SpinnerType.SquareLoader);
    // this.httpClientServer
    //   .get<Create_Product[]>({
    //     controller: 'products',
    //   })
    //   .subscribe((data) => console.log(data));

    /* #region Post  */
    // this.httpClientServer
    //   .post(
    //     { controller: 'products' },
    //     {
    //       name: 'Kalem',
    //       stock: 100,
    //       price: 15,
    //     }
    //   )
    //   .subscribe();
    // this.httpClientServer
    //   .post(
    //     { controller: 'products' },
    //     {
    //       name: 'kağıt',
    //       stock: 1000,
    //       price: 5,
    //     }
    //   )
    //   .subscribe();
    // this.httpClientServer
    //   .post(
    //     { controller: 'products' },
    //     {
    //       name: 'Kalem',
    //       stock: 50,
    //       price: 3.5,
    //     }
    //   )
    //   .subscribe();
    // this.httpClientServer
    //   .post(
    //     { controller: 'products' },
    //     {
    //       name: 'defter',
    //       stock: 30,
    //       price: 15,
    //     }
    //   )
    //   .subscribe();
    // this.httpClientServer
    //   .post(
    //     { controller: 'products' },
    //     {
    //       name: 'uç',
    //       stock: 300,
    //       price: 1,
    //     }
    //   )
    //   .subscribe();
    /* #endregion */

    /* #region Put */
    // this.httpClientServer.put(
    //       { controller: 'products' },
    //       {
    //         id:"8cbb95b7-04a2-44a1-b75e-82c6bee384f3",
    //         name: 'A4',
    //         stock: 1200,
    //         price: 15
    //       }
    //     ).subscribe();
    /* #endregion */

    // /* #region delete */
    // this.httpClientServer.delete(
    //         { controller: 'products' },"fe7240a8-e385-4092-a254-d7628b401176"

    // ).subscribe();
    /* #endregion */

    /* #region placeholder */
    //  this.httpClientServer.get({
    //   baseUrl:"https://jsonplaceholder.typicode.com",
    //   controller:"posts"
    //  }).subscribe(data=>console.log(data));
    /* #endregion */


  }
 @ViewChild(ListComponent) listComponents: ListComponent;

  createdProduct(createdProduct: Create_Product) {
    this.listComponents.getProducts();
  }


}
