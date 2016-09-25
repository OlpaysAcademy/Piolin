// @flow

import { connect } from 'react-redux';

import FollowersPage from './FollowersPage';
import { fetchFollowers } from '../../actions';

const mapStateToProps = ({ followers }) => {
    return {
        followers
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFollowers: user_name => {
            dispatch(fetchFollowers(user_name));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FollowersPage);
