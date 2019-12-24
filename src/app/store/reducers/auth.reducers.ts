//
import { User } from '../../core/user.model';
import { AuthActionTypes, All } from '../actions/user.actions';

export interface State {

  isAuthenticated: boolean;

  user: User | null;

  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          fakeToken: action.payload.fakeToken,
          login: action.payload.login
        },
        errorMessage: null
      };
    }

    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errorMessage: null
      };
    }



    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect login and/or password.'
      };
    }

    default: {
      return state;
    }
  }
}
