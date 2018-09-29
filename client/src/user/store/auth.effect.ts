import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { switchMap, map } from 'rxjs/operators';
import * as authAct from "./auth.action";
import {UserService} from "../user.service";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}

  // @Effect()
  // loadAuths$: Observable<Action> = this.actions$.pipe(
  //   ofType(authAct.ACTIONS.AUTH),
  //   switchMap((payload: authAct.authPayload) => {
  //     return UserService.call(payload);
    //   return this.http.get<any>('https://swapi.co/api/people/1/')
    //     .pipe(
    //       map((person) => {
    //         const name: string = person.name;
    //         return new authAct.SetAuths({
    //           userName: name.replace(" ", ""),
    //           friendlyName: name
    //         });
    //       })
    //     )
    // })
  // );

}
