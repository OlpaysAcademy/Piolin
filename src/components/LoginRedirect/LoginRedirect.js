import React, { Component } from 'react';


class LoginRedirect extends Component {
    componentDidMount() {
        this.props.goToLogin();
    }
    render() {
        return null;
    }
}

export default LoginRedirect;
