// @flow

import React, { Component } from 'react';
import { List as MList, ListSubHeader, ListItem } from 'react-toolbox/lib/list';

type ListProps = {
    label?: string,
    items: Object[],
    getKey: (item: Object) => string | void,
    getLegend: (item: Object) => string | void,
    getCaption: (item: Object) => string | void,
    getAvatar: (item: Object) => string | void,
    onComponentMount: () => void

}

class List extends Component {
    props: ListProps;

    static defaultProps: {
        getKey: (item: Object) => string | void,
        getLegend: (item: Object) => string | void,
        getCaption: (item: Object) => string | void,
        getAvatar: (item: Object) => string | void,
        onComponentMount: () => void,
    }

    componentDidMount() {
        this.props.onComponentMount();
    }

    render() {
        const {
            label,
            items,
            getKey,
            getLegend,
            getCaption,
            getAvatar,
        } = this.props;
        return (
            <div>
                <MList>
                    { label &&
                        <ListSubHeader caption={label} />
                    }

                    { items.map(item =>
                        <ListItem
                            key={getKey(item) }
                            caption={getCaption(item) }
                            legend={getLegend(item) }
                            avatar={getAvatar(item) }
                            />
                    ) }
                </MList>
            </div>
        );
    }
}

List.defaultProps = {
    getKey: () => {},
    getLegend: () => {},
    getCaption: () => {},
    getAvatar: () => {},
    onComponentMount: () => {}
}

export default List;
