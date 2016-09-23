// @flow
import Codebird from 'codebird';
import R from 'ramda';

import type { TweetResponse, UserResponse } from './types';

const client = new Codebird();
client.setConsumerKey('pYFXofGXdSAsB0qy9VvayFkwS', 'aZ9v7UlbYl1ZwPgVRu3SGYAh9BG3EjwhOC0hjnox05uPKYvjEL');
client.setToken('776386183643422720-iwaSQr3Qv0JoMflprzf4XCr48UzfvQd', 'cVbSIE7wfSR2SG1PIM6GAvY8MOo3tUnyp5lkCrcdfDQvr');

const promisifyCallback = (resolve: (any: any) => void, reject: (err: Error) => void) =>
  (reply: Object, rate?: Object, err: Error) => {
    if (err) { return reject(err); }
    return resolve(reply);
  }

function simpleRequest<T>(method: string, payload: Object|string = {}): Promise<T> {
    return new Promise((resolve, reject) => {
        client.__call(method, payload, promisifyCallback(resolve, reject));
    });
}
const listHomeTweets: () => Promise<TweetResponse[]> = () => 
    simpleRequest('statuses_homeTimeline');

const listFollowers: () => Promise<UserResponse[]> = () =>
    simpleRequest('followers_list')
        .then(R.prop('users'))

const listFollowing: () => Promise<UserResponse[]> = () =>
    simpleRequest('friends_list')
        .then(R.prop('users')) 

const tweet: (text: string) => Promise<TweetResponse> = (text) => {
    const payload = `status=${encodeURIComponent(text)}`;
    return simpleRequest('statuses_update', payload)
        .then(a => {
            console.log(a);
            return a;
        })
}

const twitter = {
    listHomeTweets,
    listFollowers,
    listFollowing,
    tweet,
}

export default twitter;
