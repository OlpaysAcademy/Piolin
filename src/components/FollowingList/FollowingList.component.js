// @flow

import React, { Component } from 'react';

import List from '../List/';
import type { User } from '../../types';

type FollowingListProps = {
    items: User[],
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
                    getKey={item => item.id}
                    getCaption={item => item.name}
                    getLegend={item => `@${item.screenName}`}
                    getAvatar={item => item.avatar}
                    />
            </div>
        )
    }
}

export default FollowingList;
