import { handleActions } from 'redux-actions';

const initialState = { isAuthenticated: false, dataToDisplay: '', isLoading: false, userInfo: '' };
export default handleActions({
    LOG_USER: (state, action) => {
        return { ...state, isAuthenticated: true }
    },
    LOGOUT: (state, action) => {
        return { ...state, isAuthenticated: false }
    },
    FETCH_TWEETS: (state, action) => {
        return { ...state, dataToDisplay: action.payload.reply }
    },
    FETCH_FOLLOWERS: (state, action) => {
        return { ...state, dataToDisplay: action.payload.reply.users }
    },
    FETCH_FOLLOWING: (state, action) => {
        return { ...state, dataToDisplay: action.payload.reply.users }
    },
    FETCH_USER_INFO: (state, action) => {
        return { ...state, userInfo: action.payload.reply }
    },
    IS_LOADING: (state, action) => {
        return { ...state, isLoading: action.isLoading }
    },
    CREATE_TWEET: (state, action) => {
        return state
    }
}, initialState);
