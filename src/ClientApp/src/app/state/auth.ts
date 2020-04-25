import { Action } from '@ngrx/store';
import { actionType } from './actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { AuthService, LoginCredentials, LoginResponse } from '../services/auth.service';
import { catchError, map, mergeMap } from 'rxjs/operators';

export class AuthActionTypes {
  static readonly LOGIN_REQUESTED = actionType('Login requested');
  static readonly LOGIN_SUCCEEDED = actionType('Login succeeded');
  static readonly LOGIN_FAILED = actionType('Login failed');
  static readonly LOGOUT = actionType('Logout');
}

export class LoginRequested implements Action {
  readonly type = AuthActionTypes.LOGIN_REQUESTED;

  constructor(public payload: LoginCredentials) { }
}

export class LoginSucceeded implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCEEDED;

  constructor(public payload: LoginResponse) { }
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
  constructor(public payload: string) { }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor() { }
}

export type AuthActions = LoginRequested | LoginSucceeded | LoginFailed | Logout;

@Injectable({ providedIn: 'root' })
export class AuthEffects {

  constructor(private actions$: Actions,
              private authService: AuthService) {

  }

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN_REQUESTED),
    mergeMap((action: LoginRequested) =>
      this.authService.login(action.payload).pipe(
        map(data => (new LoginSucceeded(data))),
        catchError(err => of(new LoginFailed(err)))
      )
    )
  );

}
