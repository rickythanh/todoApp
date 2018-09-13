import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'


@Injectable()
export class ApiService {
  headers: any;

  constructor(
    private http: HttpClient
  ) {
    // this.headers = new Headers();
    // this.headers.append('content-type', 'application/json; charset=utf-8');
    // this.headers.append('crossDomain', true);
  }

  base: string = 'http://127.0.0.1:3000';
  // base: string = 'https://api-todo-demo.herokuapp.com';

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.base + endpoint, reqOpts);
  }

  post(endpoint: string, body: any) {
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json;'
    // });
    // //
    // let _opt = {
    //   headers: this.headers,
    //   withCredentials: true
    // };
    // let _body = JSON.stringify(body);
    // console.log(_body);
    return this.http.post(this.base + endpoint, body);

    // return this.http.request('POST', this.base + endpoint, {responseType: 'json', params: body}).pipe(
    //     map(rep => {
    //         return rep;
    //     })
    // );
  }

}
