import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import './styles.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const init = () => {

    /**
     * aqui estoy mostrando en mi localStorage mi arreglo todos, si es null me pone entonces unarrego vacio
     * de esta manera cada que recargo la venta ahora me gusrada lo que ya tenia antes 
     * 
     */

    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {

    /**
     * state se puede campiar por todos, ya que sera el arreglo que va ir cambiado 
     * el dispatch() me pertime enviarl la action que esta en el handleSubmit hasta 
     * el archivo todoReducer donde esta el swith quien sabe que hacer 
     * conla funcion init me ayuda a computar el estado inicial, ella no se va a estar ejecutando uno y otra vez 
     * [] por defecto sera un arreglo vacio,, ese es mi estado inicil
     */

    const [todos, dispatch] = useReducer(todoReducer, [], init);



    /**
     * *aplico mi hook de useEffect que si algo sucede en mi arreglo de todos 
     * * me lo guarde en el localStorage, como solo guarda strings entoncs de le pasa 
     * * un stringify
     */
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    /**
     * aqui estoy eliminando lo que habia agregado 
     */
    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    }

    /**
     * tachamos el que ya aprendimos
     */
    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }


    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <>
            <h1>TodoApp  ({todos.length})</h1>
            <hr></hr>

            <div className='row'>

                <div className=' col-7'>
                    TODOs

                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />

                </div>

                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>

            </div>
        </>
    )
};
