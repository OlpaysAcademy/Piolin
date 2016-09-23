// @flow
type Tweet = {
    id: number,
    text: string,
    user: string
}

type TweetResponse = {
    id: number,
    text: string,
    user: {
        [name: string]: string
    }
}

type UserResponse = {
    id: number,
    name: string,
    screen_name: string,
    profile_image_url: string
}

type User = {
    id: number,
    name: string,
    screenName: string,
    avatar: string
}

type Action<T, J> = {
    type: string,
    payload: T,
    error?: boolean,
    meta: J
}

type LoadingMeta = {
    loading: boolean
}

export type { Tweet, User, Action, TweetResponse, UserResponse, LoadingMeta }