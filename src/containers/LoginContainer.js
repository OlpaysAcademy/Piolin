import { connect } from 'react-redux'
import { logUser } from '../actions'
import LoginComponent from '../components/LoginComponent'

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSubmit: (user) => {
      dispatch(logUser(user))
      dispatch({ type: 'ROUTER_PUSH', payload: '/tweets' })
    }
  }
}

const LogUser = connect(
  null,
  mapDispatchToProps
)(LoginComponent)

export default LogUser
