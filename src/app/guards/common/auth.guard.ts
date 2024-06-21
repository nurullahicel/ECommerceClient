import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';
import { _isAuthenticated } from '../../services/common/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const jwtHelper: JwtHelperService = inject(JwtHelperService);
  const toastr: CustomToastrService= inject(CustomToastrService);
  const spinner:NgxSpinnerService=inject(NgxSpinnerService); 
  
  const router:Router=inject(Router);
  spinner.show(SpinnerType.SquareJelly);
  // const decodeToken=jwtHelper.decodeToken(token);
  // const expirationDate:Date=jwtHelper.getTokenExpirationDate(token);
 
  // const token: string = localStorage.getItem('accessToken');
  // let expired: boolean;
  // try {
  //   expired=jwtHelper.isTokenExpired(token);
  // }  
  // catch {expired=true;}
  

  if(!_isAuthenticated)
{
router.navigate(["login"],{queryParams:{returnUrl:state.url}});
toastr.message("You need to sign in!","Unauthorized Access",
{messageType:ToastrMessageType.Warning,position:ToastrPosition.TopRight}
)
}
spinner.hide(SpinnerType.SquareJelly);
  return true;
};
