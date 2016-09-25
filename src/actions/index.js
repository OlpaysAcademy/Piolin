import { createAction } from 'redux-actions';
import piolin from '../libs/piolin';

export const fetchTimeline = createAction('FETCH_TIMELINE', piolin.timeline);
export const fetchFollowers = createAction('FETCH_FOLLOWERS', piolin.followers);
export const fetchFollowing = createAction('FETCH_FOLLOWING', piolin.following);
