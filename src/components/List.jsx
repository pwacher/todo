import React from 'react';

const List = props => (
    <ul>
        {
            props.items.map((newItem, index) => <li key={index}>{newItem} - <span onClick={() => props.removeItem(index)}>Done</span></li>)
        }
    </ul>
);

export default List;