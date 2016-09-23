// @flow
import _ from 'lodash';
import React, { Component } from 'react';
import {Button} from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import classes from './TweetForm.scss';

type HandleSubmitFn = (result: { tweet: string }) => void

type FormProps = {
    handleSubmit: HandleSubmitFn,
}

class TweetForm extends Component {
    props: FormProps;
    state: { value: string };

    constructor(props: FormProps) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(value: string) {
        this.setState({ value });
    }

    handleSubmit(e: Event) {
        console.log(this.props.handleSubmit);
        e.preventDefault();
        
        if (!this.state.value) { return; }

        this.props.handleSubmit({ tweet: this.state.value });
        this.setState({ value: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this) } className={classes.body} >
                <Input
                    onChange={this.handleChange.bind(this) }
                    value={this.state.value}
                    label="Tweet"
                    floating={true}
                    hint="Write your tweet"
                    maxLength={140}
                    multiline={true}
                    />
                <Button label='Tweet' accent type="submit" primary raised/>
            </form>
        )
    }
}

export default TweetForm;
