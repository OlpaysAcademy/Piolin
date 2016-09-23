// @flow

import React, { Component } from 'react';
import {Button} from 'react-toolbox/lib/button';
import { Link } from 'redux-little-router';

import List from '../List/';
import type { Tweet } from '../../types';
import TweetItem from './TweetItem';

import classes from './TweetList.scss'

type TweetListProps = {
    items: Tweet[],
    onComponentMount: () => void
}

class TweetList extends Component {
    props: TweetListProps;

    componentDidMount() {
        this.props.onComponentMount();
    }

    render() {
        return (
            <div>
                <Link href="/tweets/new" className={classes.button}>
                    <Button label='New Tweet' accent raised />
                </Link>
                <List
                    label='Tweets'
                    items={this.props.items}
                    ItemComponent={TweetItem}
                    />
            </div>
        )
    }
}

export default TweetList;
