import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/izi-toast.service';
import { AuthService } from './services/common/auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    private toastrService: CustomToastrService,
    private router:Router
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
}
