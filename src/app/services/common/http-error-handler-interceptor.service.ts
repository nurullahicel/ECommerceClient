import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from '../ui/custom-toastr.service';
import { UserAuthService } from './models/user-auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerInterceptorService implements HttpInterceptor {
  constructor(
    private toastrService: CustomToastrService,
    private userAuthService: UserAuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        switch (error.status) {
          case HttpStatusCode.Unauthorized:
           
            this.userAuthService
              .refreshTokenLogin(
                localStorage.getItem('refreshToken'),
                (state) => {
                  if(!state)
                    {
                      const url = this.router.url;
                      if (url == '/products') {
                        this.toastrService.message(
                          'You must log in to add products to the cart.',
                          'Unauthorized operation',
                          {
                            messageType: ToastrMessageType.Warning,
                            position: ToastrPosition.TopRight,
                          }
                        );
                      } else {
                        this.toastrService.message(
                          'Invalid authorize.',
                          'Unauthorized operation',
                          {
                            messageType: ToastrMessageType.Warning,
                            position: ToastrPosition.TopRight,
                          }
                        );
                      }
          
                    }

                }
              )
              .then((data) => {});

            break;
          case HttpStatusCode.InternalServerError:
            this.toastrService.message(
              'Can not reach the server.',
              'Server Error!',
              {
                messageType: ToastrMessageType.Warning,
                position: ToastrPosition.TopRight,
              }
            );
            break;
          case HttpStatusCode.BadRequest:
            this.toastrService.message('Invalid request.', 'Invalid request!', {
              messageType: ToastrMessageType.Warning,
              position: ToastrPosition.TopRight,
            });
            break;
          case HttpStatusCode.NotFound:
            this.toastrService.message(
              'Request not found.',
              'Request not found.',
              {
                messageType: ToastrMessageType.Warning,
                position: ToastrPosition.TopRight,
              }
            );
            break;
          default:
            this.toastrService.message('Unknown error.', 'Caution!', {
              messageType: ToastrMessageType.Warning,
              position: ToastrPosition.TopRight,
            });
            break;
        }
        this.spinner.hide(SpinnerType.SquareJelly);
        return of(error);
      })
    );
  }
}
