import React from 'react';
import { List, ListSubHeader } from 'react-toolbox/lib/list';
import ProgressBar from 'react-toolbox/lib/progress_bar';

const loaderStyle = {
    textAlign: 'center',
    marginTop: 100
}

class ListComponent extends React.Component {
    componentDidMount() {
        this.props[this.props.Fetch]();
    }
    render() {
        const ListItem = this.props.ListItem;
        const subheader = this.props.subheader;
        const items = this.props.Data;
        const itemElement = item => <ListItem  item={item} />
        return (
            <div>
                { this.props.isLoading 
                    ? <div style={loaderStyle}><ProgressBar type="circular" mode="indeterminate" /></div>
                    : <List><ListSubHeader caption={subheader} />{ items ? items.map(itemElement) : <div></div> }</List>
                }
            </div>
        );
    }
}

export default ListComponent

