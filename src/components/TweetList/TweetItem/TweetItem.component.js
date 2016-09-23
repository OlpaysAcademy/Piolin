// @flow

import React from 'react';
import { ListItem } from 'react-toolbox/lib/list';

import type { Tweet } from '../../../types';

type TweetItemProps = {
    item: Tweet
}

const TweetItem = ({ item }: TweetItemProps) => (
    <ListItem
        caption={item.user}
        legend={item.text}
        />
);


export default TweetItem;
