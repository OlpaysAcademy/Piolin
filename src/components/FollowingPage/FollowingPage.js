import React, { Component } from 'react';

import { List, ListItem } from '../List';
import User from '../User';

class FollowingPage extends Component {
  componentDidMount() {
    this.props.fetchFollowing('juli_mayorga');
  }
  render() {
    return (
      <List>
        {this.props.following && this.props.following.map(follower => <ListItem item={<User user={follower} />} />) }
      </List>
    );
  }
}

export default FollowingPage;
