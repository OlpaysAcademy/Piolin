import React from 'react';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

const LoginPage = () =>
    <div>
        <Input type='email' label='Email address' icon='email' />
        <Input type='password' label='Password' icon='lock' />
        <Button primary raised onClick={() => console.log('/app/tweets') }>Login</Button>
    </div>
        // <Button primary raised onClick={() => store.dispatch({ type: 'ROUTER_PUSH', payload: '/app/tweets' }) }>Login</Button>

export default LoginPage;
