import { Component,ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {UserService} from "../user/user.service";
import {LoginPage} from "../user/login/login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = TodoListPage;
  rootPage:any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private user: UserService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.init();
    });
  }

  init() {
    // this.user.loggedIn().subscribe((isLoggedIn) => {
    //   this.rootPage = isLoggedIn ? TodoListPage : LoginPage;
    // });
  }
}

