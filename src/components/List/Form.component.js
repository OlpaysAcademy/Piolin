// @flow

import React, { Component } from 'react';
import { List as MList, ListSubHeader } from 'react-toolbox/lib/list';

type ListItemProp = {
    item: any
}

type ListProps = {
    label?: string,
    items: any[],
    itemProps?: Object,
    ItemComponent: ReactClass<ListItemProp>
}

class List extends Component {
    props: ListProps;

    render() {
        const { label, items, itemProps = {}, ItemComponent } = this.props;
        return (
            <div>
                <MList>
                    {label &&
                        <ListSubHeader caption={label} />
                    }

                    {items.map(item =>
                        <ItemComponent key={item.id} { ...itemProps} item={item} />
                    ) }
                </MList>
            </div>
        );
    }
}

export default List;
