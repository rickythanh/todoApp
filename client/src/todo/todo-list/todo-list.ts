import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TodoService} from "../todo.service";
import {TodoModel} from "../todo.model";
import {TodoCreatePage} from "../todo-create/todo-create";

@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html'
})
export class TodoListPage {
  items: Array<TodoModel> = [];
  completed: any = null;
  type: Array<any>;
  filter_value: string;
  deleteEnable: boolean = false;

  constructor(
    public navCtrl: NavController,
    private service: TodoService
  ) {
    this.type = ['all', 'done', 'task'];
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
  }

  doRefresh(event?: any) {
    console.log('doRefresh');

    this.service.getall().subscribe(res => {
      console.log(res);
      this.items = res;
      if (event) event.complete();
    }, err => {
      console.log(err);
      if (event) event.complete();
    })
  }

  delete() {
    this.deleteEnable = !this.deleteEnable;
  }

  ionViewDidLoad() {
    this.doRefresh();
  }

}
