import { connect } from 'react-redux'
import { logout } from '../actions'
import LogoutComponent from '../components/LogoutComponent'

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout())
      dispatch({ type: 'ROUTER_PUSH', payload: '/login' })
    }
  }
}

const Logout = connect(
  null,
  mapDispatchToProps
)(LogoutComponent)

export default Logout
