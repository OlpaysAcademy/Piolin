//@flow
import _ from 'lodash'
import { connect } from 'react-redux'

import twitter from '../../twitter';
import { fetchTweets, tweetsFetched, postTweet, tweetPosted } from '../../actions/tweets';
import Component from './TweetForm.component';

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: ({ tweet }: { tweet: string }) => {
        dispatch(postTweet())
        return twitter.tweet(tweet)
            .then(tweet => dispatch(tweetPosted(tweet)))
            .then(() => {
                dispatch(fetchTweets());
                return twitter.listHomeTweets();
            })
            .then(tweets => dispatch(tweetsFetched(tweets)));
    }
});

const TweetForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default TweetForm;
