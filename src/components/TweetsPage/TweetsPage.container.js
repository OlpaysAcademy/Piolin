// @flow

import { connect } from 'react-redux';

import TweetsPage from './TweetsPage';
import { fetchTimeline } from '../../actions';

const mapStateToProps = ({ tweets }) => {
    return {
        tweets
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTimeline: user_name => {
            dispatch(fetchTimeline(user_name));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TweetsPage);
