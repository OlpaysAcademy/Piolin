// @flow
import { handleActions } from 'redux-actions';
import type { Action, TweetResponse, Tweet, LoadingMeta } from '../types';
import { normalize, Schema, arrayOf } from 'normalizr';

const tweetSchema = new Schema('tweets');

export type TweetsState = {
    result: string[],
    entities: { [id: string]: Tweet}
}

const startingStatus = { result: [], entities: {} }
export default handleActions({
    'TWEETS_FETCHED': (state: TweetsState, action: Action<TweetResponse[], LoadingMeta>): TweetsState =>
        normilezeTweets(action.payload),
}, startingStatus);

function normilezeTweets (rawTweets: TweetResponse[]): { result: string[], entities: {[id: string]: Tweet } } {
    const tweets = rawTweets.map(tw => {
        const id = tw.id;
        const tweet = {
            id,
            text: tw.text,
            user: tw.user.name
        }
        return tweet;
    });

    const normilized: { result: string[], entities: { tweets: { [id: string]: Tweet } } } = normalize(tweets, arrayOf(tweetSchema));
    return {
        result: normilized.result,
        entities: normilized.entities.tweets,
    }
}