import React from 'react';
import { RelativeFragment as Fragment, AbsoluteFragment as AFragment } from 'redux-little-router';
import UserInfoContainer from './containers/UserInfoContainer';
import ListContainer from './containers/ListContainer';
import CreateTweetContainer from './containers/CreateTweetContainer';
import LoginContainer from './containers/LoginContainer';
import FollowerItemComponent from './components/FollowerItemComponent';
import FollowingItemComponent from './components/FollowingItemComponent';
import TweetItemComponent from './components/TweetItemComponent';
import Logout from './containers/LogoutContainer';
import HeaderNavigation from './components/HeaderNavigation';
import { Card } from 'react-toolbox/lib/card';

const loginStyle = {
  textAlign: 'center',
  width: 450,
  padding: 20,
  marginRight: 'auto',
  marginLeft: 'auto'
}

const mainInfoStyle = {
  width: '70%',
  marginTop: 55,
  minHeight: 400
}

class App extends React.Component {
  componentWillMount() {
    if (!this.props.state.isAuthenticated) {
      this.props.onUnauthenticated()
    }
  }
  render() {
    return (
      <div>
        <Fragment forRoute="/login">
          <Card style={loginStyle}>
            <LoginContainer />
          </Card>
        </Fragment>
        <Fragment forRoute="/followers">
          <HeaderNavigation />
          <UserInfoContainer />
          <Card style={mainInfoStyle}>
            <ListContainer subheader="FOLLOWERS" Fetch="fetchFollowers" ListItem={FollowerItemComponent}/>
          </Card>
        </Fragment>
        <Fragment forRoute="/following">
          <HeaderNavigation />
          <UserInfoContainer />
          <Card style={mainInfoStyle}>
            <ListContainer subheader="FOLLOWING" Fetch="fetchFollowing" ListItem={FollowingItemComponent}/>
          </Card>
        </Fragment>
        <Fragment forRoute="/logout">
          <Logout />
        </Fragment>
        <AFragment forRoute="/tweets">
          <HeaderNavigation />
          <UserInfoContainer />
          <Card style={mainInfoStyle}>
            <ListContainer subheader="TIMELINE" Fetch="fetchTweets" ListItem={TweetItemComponent} />
          </Card>
        </AFragment>
        <AFragment forRoute="/tweets/create">
          <HeaderNavigation />
          <UserInfoContainer />
          <Card style={mainInfoStyle}>
            <CreateTweetContainer />
          </Card>
        </AFragment>
      </div>
    )
  }
}

export default App;
