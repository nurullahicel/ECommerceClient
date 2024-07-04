import {  Component, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/izi-toast.service';
import { AuthService } from './services/common/auth.service';
import { Router } from '@angular/router';
import { HttpClientService } from './services/common/http-client.service';
import { DynamicLoadComponentService } from './services/common/dynamic-load-component.service';
import { DynamicLoadComponentDirective } from './directives/common/dynamic-load-component.directive';
import{ComponentType}from"./services/common/dynamic-load-component.service"
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
@ViewChild(DynamicLoadComponentDirective,{static:true})
dynamicLoadComponentDirective:DynamicLoadComponentDirective;



  constructor(
    public authService: AuthService,
    private toastrService: CustomToastrService,
    private router:Router,
    private httpClientService:HttpClientService,
    private dynamicLoadComponentService:DynamicLoadComponentService
  ) {
    /* #region Toastr */
    // toastrService.message("merhaba","nuri",{messageType:ToastrMessageType.Info,
    // position:ToastrPosition.TopFullWidth
    // });
    // toastrService.message("merhaba","nuri",{messageType:ToastrMessageType.Warning,
    //   position:ToastrPosition.BottomFullWidth
    //   });
    // toastrService.message("merhaba","nuri",{messageType:ToastrMessageType.Error,
    //   position:ToastrPosition.BottomLeft
    //   });
    // toastrService.message("merhaba","nuri",{messageType:ToastrMessageType.Success,
    //   position:ToastrPosition.BottomRight
    //   });
    /* #endregion */
    
 

    authService.identityCheck();
  }

  signOut() {
    localStorage.removeItem('accessToken');
    this.authService.identityCheck();
    this.router.navigate([""]);
    this.toastrService.message('Session has been terminated!', 'Sign Out', {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopRight,
    });
  }
  loadComponent(){
    this.dynamicLoadComponentService.loadComponent(ComponentType.BasketComponent,
      this.dynamicLoadComponentDirective.viewContainerRef);
  }
}
