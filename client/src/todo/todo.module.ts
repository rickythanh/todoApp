import {IonicModule} from 'ionic-angular';
import {NgModule} from '@angular/core';
import {TodoService} from "./todo.service";
import {TodoCreatePage} from "./todo-create/todo-create";


export const components = [
  TodoCreatePage
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    components
  ],
  providers: [
    TodoService
  ]
})

export class TodoModule {
}
