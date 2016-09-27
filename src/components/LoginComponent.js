import React from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import Logo from './../logo-login.png';

const logoStyle = {
    width: 100
}

class Login extends React.Component {
    constructor() {
        super();
        this.state = { username: '', password: '' };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const credentials = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.onLoginSubmit(credentials);
        this.setState({ username: '', password: '' });
        return;
    }
    onChange(input, e) {
        const change = {};
        change[input] = e;
        this.setState(change);
    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <img style={logoStyle} src={Logo} alt="logo" />
                <h2 style={{color: '#224a71'}}>Piolin</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input ref='username' label='Email' type='email' icon='email' onChange={this.onChange.bind(this, 'username')} value={this.state.username} maxLength={40 }/>
                    <Input ref='password' label='Password' type='password' icon='lock' onChange={this.onChange.bind(this, 'password')} value={this.state.password} maxLength={40 }/>
                    <Button type='submit' label='Login' raised primary />
                </form>
            </div>
        );
    }
}

export default Login;
