import {NgModule} from '@angular/core';
import {IonicModule} from "ionic-angular";
import {LoginPage} from "./login/login";
import {RegisterPage} from "./register/register";
import {UserService} from "./user.service";


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
