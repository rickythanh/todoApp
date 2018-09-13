
import {Component, ElementRef, Renderer2} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TodoService} from "../../todo/todo.service";
import {TodoModel} from "../../todo/todo.model";
import {TodoCreatePage} from "../../todo/todo-create/todo-create";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Array<TodoModel> = [];
  completed: any = null;
  type: Array<any>;
  filter_value: string;

  constructor(
    public navCtrl: NavController,
    private service: TodoService,
    private re: Renderer2,
    private el: ElementRef
  ) {
    this.type  = ['all', 'done', 'task'];
    this.filter_value = this.type[0];
  }

  onSelected(name: any) {
    console.log('onSelected', name);

    switch (name) {
      case 'all':
        this.completed = null;
        break;
      case 'done':
        this.completed = true;
        break;
      case 'task':
        this.completed = false;
        break;
    }
  }

  add() {
    // this.service.add('new 01').subscribe(res => {
    //   console.log(res);
    //   this.doRefresh();
    // }, err => {
    //   console.log(err);
    // });
    this.navCtrl.push(TodoCreatePage);
  }

  doneTask(idx: number) {
    let item = this.items[idx];
    item.completed = !item.completed;

    this.service.done(item).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
      item.completed = !item.completed;
    });


    console.log(item.completed);
  }

  doRefresh(event?:any) {
    console.log('doRefresh');

    this.service.getall(1).subscribe(res => {
      console.log(res);
      this.items = res;
      if(event) event.complete();
    }, err => {
      console.log(err);
      if(event) event.complete();
    })
  }

  doSamething() {

  }

  ionViewDidLoad() {
    this.doRefresh();

    // this.re.setStyle(this.el.nativeElement, 'color', 'red');
  }

}
