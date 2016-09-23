// @flow
import { handleActions } from 'redux-actions';
import type { Action } from '../types';

export type Credentials = {
    email: string,
    password: string,
}

export type AuthState = {
    user?: Credentials,
    isLogged: boolean,
}

const startingStatus: AuthState = { isLogged: false }
export default handleActions({
    'LOGIN': (state: AuthState, action: Action<Credentials, void>): AuthState => {
        return { user: action.payload, isLogged: true }
    },
    'LOGOUT': (state: AuthState, action: Action<Credentials, void>): AuthState => {
        return { isLogged: false }
    },
}, startingStatus);