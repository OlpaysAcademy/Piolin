// @flow
import _ from 'lodash';
import React, { Component } from 'react';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import classes from './AuthForm.scss';

type HandleSubmitFn = (result: { email: string, password: string }) => void

type FormProps = {
    handleSubmit: HandleSubmitFn,
}

class AuthForm extends Component {
    props: FormProps;
    state: { email: string, password: string };

    constructor(props: FormProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(model: 'email' | 'password', value: string) {
        this.setState({ [model]: value });
    }

    handleSubmit(e: Event) {
        e.preventDefault();
        
        if (!this.state.email || !this.state.password) { return; }

        this.props.handleSubmit(this.state);
        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this) } className={classes.body} >
                <Input
                    onChange={this.handleChange.bind(this, 'email') }
                    value={this.state.email}
                    label="E-Mail"
                    type="email"
                    floating={true}
                    />
                <Input
                    onChange={this.handleChange.bind(this, 'password') }
                    value={this.state.email}
                    label="Password"
                    type="password"
                    floating={true}
                    />
                <Button label='Login' accent type="submit" primary raised/>
            </form>
        )
    }
}

export default AuthForm;
