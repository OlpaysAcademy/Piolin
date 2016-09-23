// @flow

import React from 'react';
import { ListItem } from 'react-toolbox/lib/list';

import type { User } from '../../../types';

type FollowerItemProps = {
    item: User
}

const FollowerItem = ({ item }: FollowerItemProps) => (
    <ListItem
        caption={item.name}
        legend={`@${item.screenName}`}
        avatar={item.avatar}
        />
);


export default FollowerItem;
