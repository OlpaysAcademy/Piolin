import { connect } from 'react-redux';
import UserInfoComponent from '../components/UserInfoComponent';
import { fetchUserInfo, isLoading } from '../actions';

const mapStateToProps = state => {
    return {
        Data: state.userInfo,
        isLoading: state.isLoading
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => {
      dispatch(isLoading(true))
      return dispatch(fetchUserInfo())
        .then(() => dispatch(isLoading(false)))
    }
  }
}

const ListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfoComponent);

export default ListContainer;
