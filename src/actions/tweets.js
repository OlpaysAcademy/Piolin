// @flow

import { createActions } from 'redux-actions';
import type {Action, TweetResponse, LoadingMeta} from '../types';

type TweetActions = {
    fetchTweets: () => Action<void, LoadingMeta>,
    tweetsFetched: (tweets: TweetResponse[]) => Action<TweetResponse[], LoadingMeta>,
    postTweet: () => Action<void, LoadingMeta>,
    tweetPosted: (tweet: TweetResponse) => Action<TweetResponse, LoadingMeta>,
}

const actions = createActions({
    'FETCH_TWEETS': [
        () => {},
        () => ({ loading: true }),
    ],
    'TWEETS_FETCHED': [
        tweets => tweets,
        () => ({ loading: false }),
    ],
    'POST_TWEET': [
        () => {},
        () => ({ loading: true }),
    ],
    'TWEET_POSTED': [
        tweet => tweet,
        () => ({ loading: false })
    ],
})

export const {
    fetchTweets,
    tweetsFetched,
    postTweet,
    tweetPosted,
} = (actions: TweetActions);
