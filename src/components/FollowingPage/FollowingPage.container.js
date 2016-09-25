// @flow

import { connect } from 'react-redux';

import FollowingPage from './FollowingPage';
import { fetchFollowing } from '../../actions';

const mapStateToProps = ({ following }) => {
    return {
        following
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFollowing: user_name => {
            dispatch(fetchFollowing(user_name));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FollowingPage);
