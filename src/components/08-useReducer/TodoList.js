import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <>
            <ul className='list-group list-group-flush'>
                {
                    todos.map((todo, i) => (
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                            i={i}
                        />
                    ))
                }
            </ul>
        </>
    )
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default TodoList;
