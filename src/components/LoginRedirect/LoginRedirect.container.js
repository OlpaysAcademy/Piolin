// @flow

import { connect } from 'react-redux';

import LoginRedirect from './LoginRedirect';

const mapDispatchToProps = dispatch => {
    return {
        goToLogin: url => {
            dispatch({ type: 'ROUTER_PUSH', payload: '/login' })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(LoginRedirect);
