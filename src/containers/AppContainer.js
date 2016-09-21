import { connect } from 'react-redux';
import AppComponent from '../App';

const mapStateToProps = state => state;

const App = connect(
    mapStateToProps,
    null
)(AppComponent);

export default App;
