// @flow

import { connect } from 'react-redux';

import LoginPage from './LoginPage';
import { login } from '../../actions';

const mapDispatchToProps = dispatch => {
    return {
        pushRoute: url => {
            dispatch({ type: 'ROUTER_PUSH', payload: url })
        },
        login: () => dispatch(login())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(LoginPage);
