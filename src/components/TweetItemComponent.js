import React       from 'react';
import { ListItem } from 'react-toolbox/lib/list';

const TweetItem = ({ item }) => {
    const itemObj = {
        avatar: item.user ? item.user.profile_image_url : item.profile_image_url,
        name: item.user ? item.user.name : item.name,
        tweet: item.user ? item.text : item.text
    }
    return (
        <ListItem
            avatar={itemObj.avatar}
            caption={itemObj.name}
            legend={itemObj.tweet}
        />
    )
};

export default TweetItem;
