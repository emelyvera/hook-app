import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
    return (

        <li
            
            className='list-group-item'
        >
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id)}
            >
                {i + 1}. {todo.desc}
            </p>
            <button
                className='btn btn-danger'
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>

    )
};

TodoListItem.propTypes = {
    todo: PropTypes.object,//.isRequired,
    handleToggle: PropTypes.func,//.isRequired,
    handleDelete: PropTypes.func,//.isRequired,
    i: PropTypes.number//.isRequired
};

export default TodoListItem;
