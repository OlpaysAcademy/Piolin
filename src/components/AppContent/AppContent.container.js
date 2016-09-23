// @flow

import { connect } from 'react-redux';
import AppContent from './AppContent';

const mapStateToProps = state => {
    return {
        router: state.router
    };
};

const mapDispatchToProps = dispatch => {
    return {
        pushRoute: url => {
            dispatch({ type: 'ROUTER_PUSH', payload: url })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContent);
