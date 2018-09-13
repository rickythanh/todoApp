import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {UserModel} from "../user.model";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private userService: UserService
  ) {
    this.form = new FormGroup({
      fullname: new FormControl('Thanh Tran'),
      username: new FormControl('admin', Validators.required),
      password: new FormControl('123', Validators.required),
      password_match: new FormControl('123', Validators.required)
    })
  }

  register() {
    console.log('register');
    const vm = this;

    let params = {
      fullname: this.form.get('fullname').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value,
      password_match: this.form.get('password_match').value
    };

    let alertPopup = this.alertCtrl.create({
      title: 'Done',
      buttons: [
        {
          text: 'Ok',
          handler: function (ok) {
            vm.navCtrl.pop();
          }
        }
      ]
    });

    if(params.password !== params.password_match) {
      alert('Password not match !');
      return;
    }

    this.userService.register(params).subscribe(res => {
      console.log(res);
      alertPopup.present();
    }, err => {
      alert(err.error.message);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
