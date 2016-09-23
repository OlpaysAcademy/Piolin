// @flow

import React, { Component } from 'react';

import List from '../List/';
import type { User } from '../../types';

type FollowerListProps = {
    items: User[],
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
                    getKey={item => item.id}
                    getCaption={item => item.name}
                    getLegend={item => `@${item.screenName}`}
                    getAvatar={item => item.avatar}
                    />
            </div>
        )
    }
}

export default FollowerList;
