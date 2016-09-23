import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

const LoginPage = props =>
    <div>
        <Input type='email' label='Email address' icon='email' />
        <Input type='password' label='Password' icon='lock' />
        <Button primary raised onClick={() => props.pushRoute('/app/tweets') }>Login</Button>
    </div>

export default LoginPage;
