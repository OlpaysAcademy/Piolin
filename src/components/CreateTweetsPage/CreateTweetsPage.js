import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

class CreateTweetsPage extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }
    tweet(text) {
        this.props.tweet(text);
        this.setState({ text: '' });
        this.props.pushRoute('/app/tweets');
    }
    render() {
        return (
            <div>
                <Input type='text' label='¿Qué está pasando?' onChange={value => this.setState({ text: value }) } />
                <Button primary raised onClick={() => this.tweet(this.state.text) }>Twittear</Button>
            </div>
        );
    }
}

export default CreateTweetsPage;
