// @flow

import React, { Component } from 'react';

import List from '../List/';
import type { Tweet } from '../../types';
import FollowingItem from './FollowingItem';

type FollowingListProps = {
    items: Tweet[],
    onComponentMount: () => void
}

class FollowingList extends Component {
    props: FollowingListProps;

    componentDidMount() {
        this.props.onComponentMount();
    }

    render() {
        return (
            <div>
                <List
                    label='Following'
                    items={this.props.items}
                    ItemComponent={FollowingItem}
                    />
            </div>
        )
    }
}

export default FollowingList;
