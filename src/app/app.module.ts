import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { BaseComponent } from './base/base.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import  {LoginComponent} from'./ui/components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

import { FacebookLoginProvider, GoogleLoginProvider, GoogleSigninButtonModule, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';
import { UiModule } from './ui/ui.module';
import { HttpErrorHandlerInterceptorService } from './services/common/http-error-handler-interceptor.service';
import { DynamicLoadComponentDirective } from './directives/common/dynamic-load-component.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DynamicLoadComponentDirective
    
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,  
    AppRoutingModule,
    AdminModule,
    UiModule,
    ToastrModule.forRoot(),   
    NgxSpinnerModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter:()=>localStorage.getItem("accessToken"),
        allowedDomains : ["localhost:7033"]
        
    }}),
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    provideAnimationsAsync(),
    {provide:"baseUrl",useValue:"https://localhost:7033/api",multi:true},
    {provide:"baseSignalRUrl",useValue:"https://localhost:7033/",multi:true},
    {
      provide: "SocialAuthServiceConfig",
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("236932545119-4268m75tlh47g1n93ad5g5ghv0mith6d.apps.googleusercontent.com")
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider : new FacebookLoginProvider("")
          }
        ],
        onError: err => console.log(err)
      } as SocialAuthServiceConfig
    },
    {provide:HTTP_INTERCEPTORS,useClass:HttpErrorHandlerInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

constructor() {
 
  
}



 }
