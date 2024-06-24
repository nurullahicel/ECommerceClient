import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { SignalRService } from '../../../services/common/signalr.service';
import { ReceiveFunctions } from '../../../constants/receive-functions';
import { HubUrls } from '../../../constants/hub-urls';
import { IziToastService, MessageType, Position } from '../../../services/admin/izi-toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(
    private iziToast:IziToastService,
    spinner: NgxSpinnerService,
    private signalRService: SignalRService
  ) {
    super(spinner);
    signalRService.start(HubUrls.productHub);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.SquareLoader);
    this.signalRService.on(ReceiveFunctions.productAddedMessageReceiveFunction, message => 
      {
        this.iziToast.message("Product Add",message,Position.TopCenter,MessageType.Info)
      });
      
  }
}
