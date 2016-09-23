import React from 'react';
import { List as ToolboxList, ListItem as ToolboxListItem } from 'react-toolbox/lib/list';

export const List = props => <ToolboxList {...props}>{props.children}</ToolboxList>

export const ListItem = props => <ToolboxListItem itemContent={props.item} {...props}></ToolboxListItem>
