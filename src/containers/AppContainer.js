import { connect } from 'react-redux';
import AppComponent from '../App';

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUnauthenticated: () => {
      dispatch({ type: 'ROUTER_PUSH', payload: '/logout' })
    }
  }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;
