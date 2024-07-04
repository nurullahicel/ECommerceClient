import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicLoadComponentService {

  constructor() { }

  async loadComponent(component:ComponentType,viewContainerRef:ViewContainerRef){
    let _component:any=null;
    switch(component){
      case ComponentType.BasketComponent:
      _component=(await import("../../ui/components/basket/basket.component")).BasketComponent
        break;
    }
    
    viewContainerRef.clear();    
    return viewContainerRef.createComponent(_component);
  }
}


export enum ComponentType{
  BasketComponent
}