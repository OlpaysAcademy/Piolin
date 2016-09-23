// @flow
import _ from 'lodash';
import React from 'react';
import {Button} from 'react-toolbox/lib/button';
import { RelativeFragment as Fragment, Link} from 'redux-little-router';
import ProgressBar from 'react-toolbox/lib/progress_bar';

import TweetList from '../TweetList'
import FollowingList from '../FollowingList'
import FollowerList from '../FollowerList'
import TweetForm from '../TweetForm'
import AuthForm from '../AuthForm'

import classes from './App.scss'

type AppProps = {
    loading: boolean,
    isLogged: boolean,
    handleLogout: () => void
}

const App = ({ loading, isLogged, handleLogout }: AppProps) => {
    // Only hide the body to avoid many componentDidMounts
    const headerClassName = loading ? classes.hidden : ''

    return (
        <div className={classes.body}>
            {loading &&
                <ProgressBar type="circular" mode="indeterminate" />
            }
            {!isLogged &&
                <AuthForm />
            }
            {isLogged &&
                <div className={headerClassName}>
                    <div className={classes.header}>
                        <Link href="/tweets" className={classes.button}>
                            <Button label='Tweets' raised primary />
                        </Link>
                        <Link href="/following" className={classes.button}>
                            <Button label='Following' raised accent />
                        </Link>
                        <Link href="/followers" className={classes.button}>
                            <Button label='Followers' raised />
                        </Link>
                        <Button 
                            label='Logout'
                            onClick={handleLogout}
                            className={`${classes.button} ${classes.right}`} />
                    </div>
                    <Fragment forRoute='/tweets/new'>
                        <TweetForm />
                    </Fragment>
                    <Fragment forRoute='/tweets'>
                        <TweetList />
                    </Fragment>
                    <Fragment forRoute='/following'>
                        <FollowingList />
                    </Fragment>
                    <Fragment forRoute='/followers'>
                        <FollowerList />
                    </Fragment>
                </div>
            }
        </div>

    );
}

export default App;
