import React, { Component } from 'react';

import { List, ListItem } from '../List';
import User from '../User';

class FollowersPage extends Component {
  componentDidMount() {
    this.props.fetchFollowers('juli_mayorga');
  }
  render() {
    return (
      <List>
        {this.props.followers && this.props.followers.map(follower => <ListItem item={<User user={follower} />} />) }
      </List>
    );
  }
}

export default FollowersPage;
