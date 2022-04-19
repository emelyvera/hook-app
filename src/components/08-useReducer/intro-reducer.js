/**
 * *mi lista de tareas, mi estado inicial
 */
const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}];

/**
 * * mi funcion que me va a devolver un nuevo estado, modificado no 
 * * el interrogante en action es para preguntarle si action false return state
 * * si true entra al if 
 */
const todoReducer = (state = initialState, action) => {

if ( action?.type === 'Agregar' ) {
    return [...state, action.payload]
}

    return state;
}


/**
 * * almaceno mi nuevo estado devuelto por mi funcion
 */
let todos = todoReducer();


/**
 * * el .push me modifica si yo quisiera agregar, debo es devolver un nuevo estado 
todos.push()
 * * el nuevo todo se agrega mediante ka accion de mi todoReducer
 */

const newTodo = {
    id: 2,
    todo: 'Comprar Lehce',
    done: false
};

/**
 * * la accion que se le envia al todoReducer es mediante un objeto llamado action que
 * * siempre debe tener el atributo type este me describe lo que ea que se vaya a hacer, agregar, eliminar 
 * *como segundo atributo envio el objeto que quiero que me agregue o elimine o lo quea que deba  hacer
 */
const agregarTodoAction = {
    type: 'Agregar',
    payload: newTodo
};

todos =todoReducer( todos, agregarTodoAction );

console.log(todos);