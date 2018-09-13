import {Injectable} from "@angular/core";
import {ApiService} from "../providers/api.provider";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
import {UserModel} from "./user.model";

@Injectable()
export class UserService {
  private token: string;
  constructor(
    private api: ApiService,
  ) {
  }
  getToken() {
    return this.token || '';
  }

  login(params: any): Observable<any>{
    let vm = this;
    let user = {
      username: params.username,
      password: params.password
    };

    return Observable.create((observer) => {
      vm.api.post('/user/login', user).subscribe((res: any) => {
        vm.token = res.access_token;

        observer.next(res);
        observer.complete();
      }, err=>{
        observer.error(err);
        observer.complete();
      });
    });

    // return vm.api.post('/user/login', user);
  }

  register(params: any): Observable<any> {
    let vm = this;
    let user = {
      fullname: params.fullname,
      username: params.username,
      password: params.password
    };
    return vm.api.post('/user/create', user);
    // return Observable.create((observer) => {
    //   vm.api.get('/todo/getall').subscribe((res)=>{}, (err)=>{});
    //   observer.next('');
    //   observer.complete();
    // });
  }

}
