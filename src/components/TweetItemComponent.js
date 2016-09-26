import React       from 'react';
import { ListItem } from 'react-toolbox/lib/list';

const itemStyle = {
    background: 'blue'
};

const TweetItem = ({ item }) => {
    const itemObj = {
        avatar: item.status ? item.profile_image_url : item.user.profile_image_url,
        name: item.status ? item.name : item.user.name,
        tweet: item.status ? item.status.text : item.text
    }
    return (
        <ListItem
            style={itemStyle}
            avatar={itemObj.avatar}
            caption={itemObj.name}
            legend={itemObj.tweet}
            key={item.id}
        />
    )
};

export default TweetItem;
