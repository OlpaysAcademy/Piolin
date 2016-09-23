// @flow

import { createActions } from 'redux-actions';
import type {Action, UserResponse, LoadingMeta} from '../types';

type FollowingActions = {
    fetchFollowing: () => Action<void, LoadingMeta>,
    followingFetched: (users: UserResponse[]) => Action<UserResponse[], LoadingMeta>,
}

const actions = createActions({
    'FETCH_FOLLOWING': [
        () => {},
        () => ({ loading: true }),
    ],
    'FOLLOWING_FETCHED': [
        users => users,
        () => ({ loading: false }),
    ],
})

export const {
    fetchFollowing,
    followingFetched,
} = (actions: FollowingActions);
