import React from 'react';

class Tweets extends React.Component {
    componentDidMount() {
        this.props.onFetchTweets();
    }
    render() {
        return <div></div>
    }
}

export default Tweets;
