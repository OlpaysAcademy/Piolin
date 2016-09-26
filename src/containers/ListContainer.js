import { connect } from 'react-redux';
import ListComponent from '../components/ListComponent';
import { fetchTweets, isLoading, fetchFollowers, fetchFollowing } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        Fetch: ownProps.Fetch,
        Data: state.dataToDisplay,
        ListItem: ownProps.ListItem,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweets: () => {
      dispatch(isLoading(true))
      return dispatch(fetchTweets())
        .then(() => dispatch(isLoading(false)))
    },
    fetchFollowers: () => {
      dispatch(isLoading(true))
      return dispatch(fetchFollowers())
        .then(() => dispatch(isLoading(false)))
    },
    fetchFollowing: () => {
      dispatch(isLoading(true))
      return dispatch(fetchFollowing())
        .then(() => dispatch(isLoading(false)))
    }
  }
}

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListComponent);

export default ListContainer;
