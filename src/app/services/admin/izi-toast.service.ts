import { transition } from '@angular/animations';
import { Injectable } from '@angular/core';
declare var iziToast:any

@Injectable({
  providedIn: 'root'
})
export class IziToastService {
 

  constructor() { }
  message(title:string,message:string,position:Position=Position.BottomCenter,messageType:MessageType=MessageType.Message,timeout:number=7000){
    iziToast[messageType]({title,message,position,timeout})
  }
 
  
}



export enum MessageType{
  Error="error",
  Message="show",  
  Info="info",
  Success="success",
  Warning="warning"
 
}

export enum Position{
TopCenter="topCenter",
TopLeft="topLeft",
TopRight="topRight",
BottomCenter="bottomCenter",
BottomLeft="bottomLeft",
BottomRight="bottomRight",
Center="center"
}
