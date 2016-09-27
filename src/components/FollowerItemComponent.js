import React       from 'react';
import { ListItem } from 'react-toolbox/lib/list';

const FollowerItem = ({ item }) => {
    return (
        <ListItem
            avatar={item.profile_image_url}
            caption={item.name}
            legend={item.description}
            key={item.id}
        />
    )
};

export default FollowerItem;
