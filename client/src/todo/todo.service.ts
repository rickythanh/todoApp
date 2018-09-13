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

  getall(page: number): Observable<any> {
    page = 10;
    let vm = this;
    return vm.api.get('/todo/getall', {page: page});
    // return Observable.create((observer) => {
    //   vm.api.get('/todo/getall').subscribe((res)=>{}, (err)=>{});
    //   observer.next('');
    //   observer.complete();
    // });
  }

  remove() {
  }

  add(title: string) {
    let todo = {
      // _id: null,
      // completed: null,
      title: title
      // create_date: null,
      // update_date: null,
      // user_id: '5ab25d50740ce24b63cc9c83'
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
