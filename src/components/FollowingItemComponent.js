import React       from 'react';
import { ListItem } from 'react-toolbox/lib/list';

const itemStyle = {
    background: 'grey'
};

const FollowingItem = ({ item }) => {
    return (
        <ListItem
            style={itemStyle}
            avatar={item.profile_image_url}
            caption={item.name}
            legend={item.description}
            key={item.id}
        />
    )
};

export default FollowingItem;
