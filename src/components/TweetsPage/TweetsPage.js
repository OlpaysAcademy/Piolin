import React from 'react';

import { List, ListItem } from '../List';
import Tweet from '../Tweet';

const tweet = {
  created_at: 'Mon Sep 24 03:35:21 +0000 2012',
  text: 'Aggressive Ponytail #freebandnames',
  user: {
    name: 'Jacinto',
    profile_image_url: 'https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg',
    profile_background_image_url: 'https://pbs.twimg.com/profile_banners/2419721179/1465935803/1500x500'
  }
};

const TweetsPage = () =>
    <List>
        <ListItem item={<Tweet tweet={tweet} />} />
    </List>

export default TweetsPage;
