// @flow

import { connect } from 'react-redux';
import LoginPage from './LoginPage';

const mapDispatchToProps = dispatch => {
    return {
        pushRoute: url => {
            dispatch({ type: 'ROUTER_PUSH', payload: url })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(LoginPage);
