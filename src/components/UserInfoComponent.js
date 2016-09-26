import React from 'react';
import { Card, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const cardStyle = {
    width: '25%',
    float: 'left',
    marginRight: '10px',
    minHeight: 300,
    minWidth: 350
};

const loaderStyle = {
    textAlign: 'center',
    marginTop: 100
}

class UserInfoComponent extends React.Component {
    componentDidMount() {
        this.props.fetchUserInfo();
    }
    render() {
      return (
        <Card style={cardStyle}>
          { !this.props.Data && this.props.isLoading ? <div style={loaderStyle}><ProgressBar type="circular" mode="indeterminate" /></div> : '' }
          { !this.props.Data ? ''
            : <div><CardMedia
                  aspectRatio="wide"
                  image={this.props.Data.profile_banner_url}
                />
                <CardTitle
                  avatar={this.props.Data.profile_image_url}
                  title={this.props.Data.name}
                  subtitle={this.props.Data.description}
                  className="user-info_card"
                />
              </div>
            }
        </Card>
      )
    }
}

export default UserInfoComponent
