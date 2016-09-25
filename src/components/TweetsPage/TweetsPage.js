import React, { Component } from 'react';

import { List, ListItem } from '../List';
import Tweet from '../Tweet';

class TweetsPage extends Component {
  componentDidMount() {
    this.props.fetchTimeline('juli_mayorga');
  }
  render() {
    return (
      <List>
        {this.props.tweets && this.props.tweets.map(tweet => <ListItem item={<Tweet tweet={tweet} />} />) }
      </List>
    );
  }
}

export default TweetsPage;
