import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";


// @Injectable()
// export class AuthAction {

  // export const CHECK_TOKEN = 'AUTH_CHECK_TOKEN';
  // export const AUTH = 'AUTH_LOGIN';
  export enum ACTIONS {
    CHECK_TOKEN = 'AUTH_CHECK_TOKEN',
    AUTH = 'AUTH_LOGIN'
  }
  export interface authPayload {
    username: string;
    password: string;
  }

  export class checkToken implements Action{
    type = ACTIONS.CHECK_TOKEN;
  }

  export class auth implements Action {
    type = ACTIONS.AUTH;

    constructor(public payload: authPayload){}
  }

  export type AuthAction = checkToken | auth;
  // checkToken(): Action {
  //   return {
  //     type: AuthAction.CHECK_TOKEN
  //   }
  // }
  //
  //
  // auth(username: string, password: string): Action {
  //   return {
  //     type: AuthAction.AUTH
  //   };
  // }

// }
