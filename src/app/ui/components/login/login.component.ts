import { Component } from '@angular/core';
import { UserService } from '../../../services/common/models/user.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseComponent {

constructor(private userService:UserService,spinner:NgxSpinnerService){
  super(spinner);
}

async Login(usernameOrEmail:string,password:string){
  this.showSpinner(SpinnerType.SquareLoader);
await this.userService.Login(usernameOrEmail,password,()=>this.hideSpinner(SpinnerType.SquareLoader));
}

}
