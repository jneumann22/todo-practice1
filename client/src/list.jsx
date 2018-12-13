import React from 'react';
import ListItem from './listItem.jsx';

const List = (props) => {
    return (
        <div>
            <ul>
                {props.list.map((item, index) => {
                    return (
                    <ListItem  item = {item} key = {index} deleteItem = {props.deleteItem} editItem = {props.editItem}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default List