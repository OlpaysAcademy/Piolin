import React from 'react';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const newTweetStyle = {
    float: 'left',
    width: '66%',
    marginTop: 40,
    marginLeft: 20
};

const loaderStyle = {
    textAlign: 'center',
    marginTop: 100
}

class CreateTweet extends React.Component {
    constructor() {
        super();
        this.state = { newTweet: '' };
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.onNewTweetSubmit(this.state.newTweet);
        this.setState({ newTweet: '' });
        return;
    }
    onChange(e){
        this.setState({
            newTweet: e
        });
    }
    render() {
        const renderForm = () => {
            return (
                <div style={newTweetStyle}>
                    <form onSubmit={this.handleSubmit}>
                        <Input ref='newTweet' label='New Tweet' type='text' icon='message' onChange={this.onChange} value={this.state.newTweet} maxLength={140 }/>
                        <Button type='submit' label='Create' raised primary />
                    </form>
                </div>
            )
        }

        return (
            <div>
                { this.props.isLoading
                    ? <div style={loaderStyle}><ProgressBar type="circular" mode="indeterminate" /></div>
                    : renderForm()
                }
            </div>
        );
    }
}

export default CreateTweet;
