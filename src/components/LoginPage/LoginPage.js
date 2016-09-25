import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import { login } from '../../libs/auth';

class LoginPage extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loginError: ''
        };
    }
    login(email, password) {
        login(email, password)
            .then(res => {
                this.setState({ email: '', password: '' });
                if (res) {
                    this.props.login();
                    return this.props.pushRoute('/app/tweets');
                }
                this.setState({
                    loginError: 'Invalid email and/or password'
                });
            });
    }
    render() {
        return (
            <div>
                <div>{this.state.loginError}</div>
                <Input type='email' label='Email address' value={this.state.email} icon='email' onChange={value => this.setState({ email: value }) } />
                <Input type='password' label='Password' value={this.state.password} icon='lock' onChange={value => this.setState({ password: value }) } />
                <Button primary raised onClick={() => this.login(this.state.email, this.state.password) }>Login</Button>
            </div>
        );
    }
}

export default LoginPage;
