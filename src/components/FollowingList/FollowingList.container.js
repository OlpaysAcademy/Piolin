//@flow
import _ from 'lodash'
import { connect } from 'react-redux'

import twitter from '../../twitter';
import Component from './FollowingList.component';
import { fetchFollowing, followingFetched } from '../../actions/following';
import type {State} from '../../reducers';

const mapStateToProps = ({following}: State) => {
    return { items: _.values(following.entities) };
}

const mapDispatchToProps = (dispatch) => ({
    onComponentMount: () => {
        dispatch(fetchFollowing())
        return twitter.listFollowing()
            .then(users => dispatch(followingFetched(users)));
    }
});

const FollowingList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default FollowingList;
