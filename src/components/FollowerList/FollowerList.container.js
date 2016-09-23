//@flow
import _ from 'lodash'
import { connect } from 'react-redux'

import twitter from '../../twitter';
import Component from './FollowerList.component';
import { fetchFollowers, followersFetched } from '../../actions/followers';
import type {State} from '../../reducers';

const mapStateToProps = ({followers}: State) => {
    return { items: _.values(followers.entities) };
}

const mapDispatchToProps = (dispatch) => ({
    onComponentMount: () => {
        dispatch(fetchFollowers())
        twitter.listFollowers()
            .then(users => dispatch(followersFetched(users)));
    }
});

const FollowerList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default FollowerList;
