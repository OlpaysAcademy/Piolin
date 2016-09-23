// @flow
import { handleActions } from 'redux-actions';
import type { Action, UserResponse, User, LoadingMeta } from '../types';
import { normalize, Schema, arrayOf } from 'normalizr';

const usersSchema = new Schema('users');

export type FollowingState = {
    result: string[],
    entities: { [id: string]: User}
}

const startingStatus = { result: [], entities: {} }
export default handleActions({
    'FOLLOWING_FETCHED': (state: FollowingState, action: Action<UserResponse[], LoadingMeta>): FollowingState =>
        normilezeUsers(action.payload),
}, startingStatus);

function normilezeUsers (rawUsers: UserResponse[]): { result: string[], entities: {[id: string]: User } } {
    const users = rawUsers.map(usr => {
        const user = {
            id: usr.id,
            name: usr.name,
            screenName: usr.screen_name,
            avatar: usr.profile_image_url,
        }
        return user;
    });

    const normilized: { result: string[], entities: { users: { [id: string]: User } } } = normalize(users, arrayOf(usersSchema));
    return {
        result: normilized.result,
        entities: normilized.entities.users,
    }
}