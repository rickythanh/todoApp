
import { ActionReducer, Action } from '@ngrx/store';
import {AuthState, initState} from "./auth.state";
import * as authAct from "./auth.action";

// export const authReducer: ActionReducer<AuthState> = (state: AuthState = initState, action: Action) => {
//   switch (action.type) {
//     case authAct.ACTIONS.CHECK_TOKEN:
//       return {
//         currUser: state.currUser
//       };
//     default:
//       return state;
//   }
// };

export function authReducer(state:AuthState=initState, action: Action ) {
  switch (action.type) {

    case authAct.ACTIONS.CHECK_TOKEN:
      return {
        currUser: state.currUser
      };
    default:
      return state;
  }
};
