
import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {LoginPage} from "./login/login";
import {RegisterPage} from "./register/register";
import {UserService} from "./user.service";
import {TokenInterceptor} from "../providers/token.interceptor";

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    LoginPage,
    RegisterPage
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
}
