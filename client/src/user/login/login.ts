import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {NavController} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {UserService} from "../user.service";
import {TodoListPage} from "../../todo/todo-list/todo-list";


@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
  private form: FormGroup;

  constructor(
    private nav: NavController,
    private userService: UserService
  ) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    console.log('login');

    let params = {
      username: this.form.get('username').value,
      password: this.form.get('password').value
    };
    this.userService.login(params).subscribe(res => {
      console.log(res);
      this.nav.setRoot(TodoListPage);
    }, err => {
      alert(err.message);
    });
  }

  createAccount() {
    this.nav.push(RegisterPage, {});
  }

}
