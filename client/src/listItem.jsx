import React from 'react'

const ListItem = (props) => {
    return (
        <div>
            <li>
                {props.item.playerName}
                {'   '}
                {props.item.playerNum}
                <button onClick = {() => {props.deleteItem(props.item._id)}}>Delete</button>
                <button onClick = {() => {props.editItem(props.item._id)}}>Edit</button>
            </li>
        </div>
    )
}

export default ListItem