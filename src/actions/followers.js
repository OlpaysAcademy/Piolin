// @flow

import { createActions } from 'redux-actions';
import type {Action, UserResponse, LoadingMeta} from '../types';

type FollowersActions = {
    fetchFollowers: () => Action<void, LoadingMeta>,
    followersFetched: (users: UserResponse[]) => Action<UserResponse[], LoadingMeta>,
}

const actions = createActions({
    'FETCH_FOLLOWERS': [
        () => {},
        () => ({ loading: true }),
    ],
    'FOLLOWERS_FETCHED': [
        users => users,
        () => ({ loading: false }),
    ],
})

export const {
    fetchFollowers,
    followersFetched,
} = (actions: FollowersActions);
