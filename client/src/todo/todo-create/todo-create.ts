import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TodoService} from "../todo.service";

/**
 * Generated class for the TodoCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-todo-create',
  templateUrl: 'todo-create.html',
})
export class TodoCreatePage {
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private builder: FormBuilder,
    private service: TodoService,
    private alertCtrl: AlertController
  ) {
    this.form = this.builder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
  }

  done() {
    let vm = this;
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

    this.service.add(this.form.get('title').value).subscribe(res =>{
      alertPopup.present();
    }, err => {

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoCreatePage');
  }

}
