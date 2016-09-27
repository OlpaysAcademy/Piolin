import { createAction } from 'redux-actions';
import auther from '../utils/TwitterApi';

export const fetchTweets = createAction('FETCH_TWEETS', auther.getTimeline);
export const fetchFollowers = createAction('FETCH_FOLLOWERS', auther.getFollowers);
export const fetchFollowing = createAction('FETCH_FOLLOWING', auther.getFollowing);
export const fetchUserInfo = createAction('FETCH_USER_INFO', auther.getUserInfo);
export const createTweet = createAction('CREATE_TWEET', auther.createTweet);
export const logUser = user => {
    return { type: 'LOG_USER', user }
}
export const logout = () => {
    return { type: 'LOGOUT' }
}
export const isLoading = isLoading => {
    return { type: 'IS_LOADING', isLoading }
}
