//@flow
import _ from 'lodash'
import { connect } from 'react-redux'

import twitter from '../../twitter';
import Component from './TweetList.component';
import { fetchTweets, tweetsFetched } from '../../actions/tweets';
import type {State} from '../../reducers';

const mapStateToProps = ({tweets}: State) => {
    return { items: _.values(tweets.entities) };
}

const mapDispatchToProps = (dispatch) => ({
    onComponentMount: () => {
        dispatch(fetchTweets())
        return twitter.listHomeTweets()
            .then(tweets => dispatch(tweetsFetched(tweets)));
    }
});

const TweetList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default TweetList;
