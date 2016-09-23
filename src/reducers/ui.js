// @flow
import _ from 'lodash';
import type { Action, LoadingMeta } from '../types';

export type UIState = {
    loading: boolean,
}

const startingStatus = { loading: false };
const ui = (state: UIState = startingStatus, action: Action<any, LoadingMeta>): UIState => 
    loadingReducer(state, action);

export default ui

function loadingReducer(state: UIState, action: Action<any, LoadingMeta>) {
    const loading = _.get(action, 'meta.loading');
    
    if (!_.isBoolean(loading)) { return state; }
    
    return { ...state, loading };
}
