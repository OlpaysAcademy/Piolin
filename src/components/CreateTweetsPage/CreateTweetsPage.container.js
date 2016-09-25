// @flow

import { connect } from 'react-redux';

import { tweet } from '../../actions';
import CreateTweetsPage from './CreateTweetsPage';

const mapStateToProps = state => {
    return {
        router: state.router
    };
};

const mapDispatchToProps = dispatch => {
    return {
        pushRoute: url => {
            dispatch({ type: 'ROUTER_PUSH', payload: url })
        },
        tweet: text => {
            dispatch(tweet(text));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTweetsPage);
