import {IonicModule} from 'ionic-angular';
import {NgModule} from '@angular/core';
import {TodoService} from "./todo.service";
import {TodoCreatePage} from "./todo-create/todo-create";
import {TodoListPage} from "./todo-list/todo-list";
import {PipesModule} from "../pipes/pipes.module";


@NgModule({
  declarations: [
    TodoCreatePage,
    TodoListPage
  ],
  imports: [
    IonicModule,
    PipesModule
  ],
  entryComponents: [
    TodoCreatePage,
    TodoListPage
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule {
}
