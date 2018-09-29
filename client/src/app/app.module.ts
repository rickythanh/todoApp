import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {authReducer} from "../user/store/auth.reducer";
import {AuthEffects} from "../user/store/auth.effect";
// import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { MyApp } from './app.component';
import {TodoModule} from "../todo/todo.module";
import {ApiService} from "../providers/api.provider";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {PipesModule} from "../pipes/pipes.module";
import {UserModule} from "../user/user.module";
import {TokenInterceptor} from "../providers/token.interceptor";
import {NativeStorage} from "@ionic-native/native-storage";

export const MODULES = [
  BrowserModule,
  HttpClientModule,
  PipesModule,
  TodoModule,
  UserModule
];

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MODULES,
    StoreModule.forRoot({auth: authReducer}),
    EffectsModule.forRoot([AuthEffects]),
    // StoreDevtoolsModule.instrument()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
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
