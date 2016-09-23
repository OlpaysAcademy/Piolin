//@flow
import _ from 'lodash'
import { connect } from 'react-redux'

import Component from './App.component';
import { logout } from '../../actions/auth';

import type {State} from '../../reducers';

const mapStateToProps = ({ ui, auth }: State) => ({ 
    loading: ui.loading,
    isLogged: auth.isLogged
})

const mapDispatchToProps = (dispatch) => ({
    handleLogout: () => dispatch(logout())
});

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);

export default App;
