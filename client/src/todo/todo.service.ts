import {Injectable} from "@angular/core";
import {ApiService} from "../providers/api.provider";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import {TodoModel} from "./todo.model";

@Injectable()
export class TodoService {
  constructor(
    private api: ApiService,
  ) {
  }

  getall(): Observable<any> {
    return this.api.get('/todo/getall', {});
  }

  remove() {
  }

  add(title: string) {
    let todo = {
      title: title
    };
    return this.api.post('/todo/create', todo);
  }

  done(todo: TodoModel): Observable<any> {
    let body = {
      _id: todo._id,
      completed: todo.completed,
      title: todo.title,
      create_date: todo.create_date,
      update_date: +(new Date())
    };
    return this.api.post('/todo/done', todo);
  }

  doneall() {
  }


}
