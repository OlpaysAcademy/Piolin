import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';
import Navigation from 'react-toolbox/lib/navigation';
import { RelativeFragment as Fragment, AbsoluteFragment } from 'redux-little-router';

import LoginPage from '../LoginPage';
import TweetsPage from '../TweetsPage';
import CreateTweetsPage from '../CreateTweetsPage';
import FollowingPage from '../FollowingPage';
import FollowersPage from '../FollowersPage';
import LoginRedirect from '../LoginRedirect';
import style from './AppContent.scss';
import logo from '../../logo.svg';

class AppContent extends Component {
    render() {
        return (
            <div className={style.App}>
                <div className={style.header}>
                    <img className={style.logo} src={logo} alt="logo" />
                </div>
                <Fragment forRoute={'/login'}>
                    <LoginPage />
                </Fragment>
                <Fragment forRoute={'/app'} withConditions={location => !this.props.isLoggedIn}>
                    <LoginRedirect />
                </Fragment>
                <Fragment forRoute={'/app'} withConditions={location => this.props.isLoggedIn}>
                    <Navigation type='horizontal'>
                        <Button primary={this.props.router.route === '/app/tweets'} onClick={() => this.props.pushRoute('/app/tweets') }>Tweets</Button>
                        <Button primary={this.props.router.route === '/app/following'} onClick={() => this.props.pushRoute('/app/following') }>Following</Button>
                        <Button primary={this.props.router.route === '/app/followers'} onClick={() => this.props.pushRoute('/app/followers') }>Followers</Button>
                        <Button primary={this.props.router.route === '/app/tweets/create'} onClick={() => this.props.pushRoute('/app/tweets/create') }>Create tweet</Button>
                    </Navigation>
                    <AbsoluteFragment forRoute={'/app/tweets'}>
                        <TweetsPage />
                    </AbsoluteFragment>
                    <Fragment forRoute={'/tweets/create'}>
                        <CreateTweetsPage />
                    </Fragment>
                    <Fragment forRoute={'/following'}>
                        <FollowingPage />
                    </Fragment>
                    <Fragment forRoute={'/followers'}>
                        <FollowersPage />
                    </Fragment>
                </Fragment>
            </div>
        );
    }
}


export default AppContent;
