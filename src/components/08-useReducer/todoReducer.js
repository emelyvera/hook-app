/**
 * * esto es mi primer arametro que envio en mi useReducer es mi funcion 
 * * el state lo hago siempre como un arreglo si lo tengo bueno si no entonces vacio 
 * * normalmente se trabaja con switch para evaluar las condiciones que son puntuales o sea ===
 * * es imprtante definir el default se llamacuando se inicializa 
 */
export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];

        // usamos filter porque me regresa un nuevo arrreglo
        case 'delete':
            return state.filter(todo => todo.id !== action.payload);

        case 'toggle':
            return state.map(todo =>
                (todo.id === action.payload) ? { ...todo, done: !todo.done } : todo
            );
            // return state.map(todo => {
            //     if (todo.id === action.payload) {
            //         return {
            //             ...todo,
            //             done: !todo.done
            //         }
            //     } else {
            //         return todo;
            //     }
            // })

        default:
            return state
    }
}