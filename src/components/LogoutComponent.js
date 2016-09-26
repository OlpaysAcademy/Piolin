import React from 'react';

class Logout extends React.Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return <div></div>
    }
}

export default Logout;
