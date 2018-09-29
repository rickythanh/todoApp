import {Injectable} from "@angular/core";
import {ApiService} from "../providers/api.provider";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
// import {UserModel} from "./user.model";
// import {observable} from "rxjs/symbol/observable";
import {NativeStorage} from "@ionic-native/native-storage";
// import {Store} from '@ngrx/store';
import {AuthState} from "./store/auth.state";
// import * as authAct from "./store/auth.action";
// import {ApiModel} from "../providers/api.model";

// export interface AppState {
//   auth: AuthState;
// }

@Injectable()
export class UserService {
  private token: string;

  constructor(
    private api: ApiService,
    // private store: Store<AppState>,
    private storage: NativeStorage
  ) {
  }

  getToken() {
    return this.token || '';
  }

  // loggedIn(): Observable<boolean> {
  //   return Observable.create(obs => {
  //     console.log('loggedIn ', true);
  //     obs.next(!true);
  //     obs.complete();
  //   });
  // }

  // public auth(params: authAct.authPayload) {
  //   const api: ApiModel = {
  //     endpoint: '/api/login',
  //     method: 'POST',
  //     params: params
  //   };
  //   return this.api.call(api);
  // }

  login(params: any): Observable<any> {
    let vm = this;
    let user = {
      username: params.username,
      password: params.password
    };

    return Observable.create((observer) => {
      vm.api.post('/user/login', user).subscribe((res: any) => {
        vm.token = res.access_token;
        vm.storage.setItem('TAG_TOKEN_KEY', res.access_token);

        observer.next(res);
        observer.complete();
      }, err => {
        observer.error(err);
        observer.complete();
      });
    });
  }

  register(params: any): Observable<any> {
    let user = {
      fullname: params.fullname,
      username: params.username,
      password: params.password
    };

    return this.api.post('/user/create', user);
  }

}
