import { connect } from 'react-redux'
import { createTweet, isLoading } from '../actions'
import CreateTweetComponent from '../components/CreateTweetComponent'

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewTweetSubmit: (body) => {
      dispatch(isLoading(true))
      dispatch(createTweet(body))
        .then(() => {
          dispatch(isLoading(false))
          dispatch({ type: 'ROUTER_PUSH', payload: '/tweets' })
        })
    }
  }
}

const CreateTweet = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTweetComponent)

export default CreateTweet
