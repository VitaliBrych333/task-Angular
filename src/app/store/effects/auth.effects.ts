import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';
import { map } from "rxjs/operators";


import { AuthServiceService } from '../../breadcrumbs/auth-service.service';
import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure,
} from '../actions/user.actions';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthServiceService,
    private router: Router,
  ) {}

 @Effect()
LogIn: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGIN)).pipe(
  map((action: LogIn) => action.payload))
  .switchMap(payload => {
    return this.authService.logIn(payload.login, payload.password)
      .map((user) => {

        localStorage.setItem('fakeToken', user.token);

        this.authService.getUserInfo().subscribe(user => {
          localStorage.setItem('firstName', user.name.first)
          localStorage.setItem('lastName', user.name.last);
          localStorage.setItem('logStatus', 'true')
          this.authService.changeMessage(true);
          this.router.navigate(['/courses']);
        })

        return new LogInSuccess({token: user.token, login: payload.login});
      })
      .catch((error) => {
        console.log(error);
        return Observable.of(new LogInFailure({ error: error }));
      });
  });

@Effect({ dispatch: false })
LogInSuccess: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGIN_SUCCESS),
  tap((user) => {
    localStorage.setItem('token', user.payload.token);
    this.router.navigateByUrl('/');
  })
);

@Effect({ dispatch: false })
LogOut: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGOUT),
  tap(() => {
    localStorage.clear();
    this.authService.changeMessage(false);
    this.authService.logOut();
  })
);

@Effect({ dispatch: false })
LogInFailure: Observable<any> = this.actions.pipe(
  ofType(AuthActionTypes.LOGIN_FAILURE)
);





}



