// @flow

import { createActions } from 'redux-actions';
import type {Action} from '../types';
import type {Credentials} from '../reducers/auth';

type AuthActions = {
    login: (credentials: Credentials) => Action<Credentials, void>,
    logout: () => Action<void, void>,
}

const actions = createActions({
    'LOGIN': credentials => credentials,
    'LOGOUT': () => {},
})

export const {
    login,
    logout,
} = (actions: AuthActions);
