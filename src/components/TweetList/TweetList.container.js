//@flow
import _ from 'lodash'
import { connect } from 'react-redux'

import twitter from '../../twitter';
import Component from '../List';
import { fetchTweets, tweetsFetched } from '../../actions/tweets';
import type {State } from '../../reducers';

const mapStateToProps = ({tweets}: State) => {
    return {
        items: _.values(tweets.entities),
        label: 'Tweets',
        getKey: item => item.id,
        getCaption: item => item.user,
        getLegend: item => item.text,
    };
}

const mapDispatchToProps = (dispatch) => ({
    onComponentMount: () => {
        dispatch(fetchTweets())
        twitter.listHomeTweets()
            .then(tweets => dispatch(tweetsFetched(tweets)));
    }
});

const TweetList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default TweetList;
