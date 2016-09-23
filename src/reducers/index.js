// @flow
import { combineReducers } from 'redux'

import tweets from './tweets'
import ui from './ui'
import following from './following'
import followers from './followers'
import auth from './auth'

import type { TweetsState } from './tweets';
import type { UIState } from './ui';
import type { FollowingState } from './following';
import type { FollowersState } from './followers';
import type { AuthState } from './auth';

export type State = {
    tweets: TweetsState,
    ui: UIState,
    following: FollowingState,
    followers: FollowersState,
    auth: AuthState,
}

const piolin = combineReducers({
    tweets,
    ui,
    following,
    followers,
    auth
});

export default piolin;
