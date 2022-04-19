import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodo } from "../../fixtures/demoTodo";

describe('pruebas en <todoReducer/>', () => {

    test('should de retornar el estado por defecto', () => {
        /**
         * ese objeto vacio es mi action
         */
        const state = todoReducer(demoTodo, {});
        expect(state).toEqual(demoTodo);
    });

    test('should agreagr un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Mongo',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodo, action);
        expect(state.length).toBe(3);
        /**
         * aqui estamos siendo aun mas especificos
         */
        expect(state).toEqual([...demoTodo, newTodo]);

    });

    test('should eliminar un todo', () => {

        const action = {
            type: 'delete',
            payload: 1
        };

        const state = todoReducer(demoTodo, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodo[1]]);


    });

    test('should rayar un todo', () => {


        const action = {
            type: 'toggle',
            payload: 2
        };

        const state = todoReducer(demoTodo, action);
        expect(state[1].done).toBe(true);
        expect(state[0]).toEqual(demoTodo[0]);


    });

});
