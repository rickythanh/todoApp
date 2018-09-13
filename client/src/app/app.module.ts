import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {TodoModule} from "../todo/todo.module";
import {ApiService} from "../providers/api.provider";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {PipesModule} from "../pipes/pipes.module";
import {UserModule} from "../user/user.module";
import {TokenInterceptor} from "../providers/token.interceptor";

export const MODULES = [
  BrowserModule,
  HttpClientModule,
  PipesModule,
  TodoModule,
  UserModule
];

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MODULES
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    ApiService
  ]
})
export class AppModule {}
