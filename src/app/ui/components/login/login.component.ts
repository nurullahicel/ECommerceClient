import { Component } from '@angular/core';
import { UserService } from '../../../services/common/models/user.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { AuthService } from '../../../services/common/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClientService } from '../../../services/common/http-client.service';
import { TokenResponse } from '../../../contracts/token/tokenResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends BaseComponent {
  constructor(
    private userService: UserService,
    spinner: NgxSpinnerService,
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private socialAuthService:SocialAuthService
   
  ) {
    super(spinner);
    socialAuthService.authState.subscribe(async (user:SocialUser)=>{
      console.log(user);
      spinner.show(SpinnerType.SquareJelly);
      await userService.googleLogin(user,()=>{
        authService.identityCheck();
        spinner.hide(SpinnerType.SquareJelly);
      } );
      
    });
  }

  async Login(usernameOrEmail: string, password: string) {
    this.showSpinner(SpinnerType.SquareLoader);
    await this.userService.Login(usernameOrEmail, password, () =>
      {
        this.authService.identityCheck(),
        this.activatedRoute.queryParams.subscribe(params=>{
          const returnUrl:string=params["returnUrl"];
          if(returnUrl){
            this.router.navigate([returnUrl]);
          }
        }),
        this.hideSpinner(SpinnerType.SquareLoader)
      }
    );
  }


}
