// import { createAction, props } from '@ngrx/store';

// export const login = createAction(
//   '[Login Page] Login',
//   props<{ username: string; password: string }>()
// );

// export const logOut = createAction('[Login Component] LogOut');


import { Action } from '@ngrx/store';


export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login Success',
  LOGIN_FAILURE = '[Auth] Login Failure',
  LOGOUT = '[Auth] Logout',
  LOAD_MORE = '[Course] LoadMore',
  LOAD_MORE_SUCCESS = '[Course] LoadMoreSucces',
  ADD_COURSE = '[Course] ADDCourse',
  UPDATE_COURSE = '[Course] UpdateCourse'

}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor() {}
}

export class LoadMore implements Action {
  readonly type = AuthActionTypes.LOAD_MORE;
  constructor(public payload: any) {}
}

export class LoadMoreSuccess implements Action {
  readonly type = AuthActionTypes.LOAD_MORE_SUCCESS;
  constructor(public payload: any) {}
}

export class AddCourse implements Action {
  readonly type = AuthActionTypes.ADD_COURSE;
  constructor(public payload: any) {}
}

export class UpdateCourse implements Action {
  readonly type = AuthActionTypes.UPDATE_COURSE;
  constructor(public payload: any) {}
}


export type All =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | LogOut
  | LoadMore
  | LoadMoreSuccess
  | AddCourse
  | UpdateCourse
