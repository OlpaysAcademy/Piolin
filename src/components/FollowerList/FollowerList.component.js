// @flow

import React, { Component } from 'react';

import List from '../List/';
import type { Tweet } from '../../types';
import FollowingItem from './FollowerItem';

type FollowerListProps = {
    items: Tweet[],
    onComponentMount: () => void
}

class FollowerList extends Component {
    props: FollowerListProps;

    componentDidMount() {
        this.props.onComponentMount();
    }

    render() {
        return (
            <div>
                <List
                    label='Followers'
                    items={this.props.items}
                    ItemComponent={FollowingItem}
                    />
            </div>
        )
    }
}

export default FollowerList;
