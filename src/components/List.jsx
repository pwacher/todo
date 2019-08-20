import React from 'react';

const List = props => (
    <ul className="todolist">
        {
            props.items.map((newItem, index) => <li key={index}>{newItem}</li>)
        }
    </ul>
);

export default List;