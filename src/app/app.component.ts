import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';
import { MessageType } from './services/admin/izi-toast.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ECommerceClient';
  constructor() {  /* #region Toastr */
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
    
    
   

 
 
  }
}



