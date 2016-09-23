//@flow
import _ from 'lodash'
import { connect } from 'react-redux'

import { login } from '../../actions/auth';
import Component from './AuthForm.component';

import type {Credentials} from '../../reducers/auth';

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (credentials: Credentials) => {
        dispatch(login(credentials));
    }
});

const AuthForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default AuthForm;
