import React from 'react';

const List = props => (
    <ul className="todolist">
        {
            props.items.map((newItem, index) => <li key={index}>{newItem} <button>Delete</button></li>)
        }
    </ul>
);

export default List;