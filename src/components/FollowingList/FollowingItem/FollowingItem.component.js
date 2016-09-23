// @flow

import React from 'react';
import { ListItem } from 'react-toolbox/lib/list';

import type { User } from '../../../types';

type FollowingItemProps = {
    item: User
}

const FollowingItem = ({ item }: FollowingItemProps) => (
    <ListItem
        caption={item.name}
        legend={`@${item.screenName}`}
        avatar={item.avatar}
        />
);


export default FollowingItem;
