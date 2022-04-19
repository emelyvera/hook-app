import React from "react";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { shallow, mount } from 'enzyme';
import { demoTodo } from "../../fixtures/demoTodo";
import { act } from "@testing-library/react";

describe('preuebas en <TodoApp />', () => {
    
    const wrapper = shallow( <TodoApp />);
    Storage.prototype.setItem = jest.fn(()=>{})

    test('should de mostrarse correctamente', () => {
      
        expect(wrapper).toMatchSnapshot();
    });

    test('should de agregar un todo', () => {
      /**
       * shallow es mas general es mas basico 
       * el mount es mas especial me permite ver sus hijos y demas 
       */
        const wrapper = mount( <TodoApp />);

        act( () => {

            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[1]);

        });

        expect( wrapper.find('h1').text().trim() ).toBe('TodoApp  (2)');
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);

    });
    
    test('should de eliminar un todo', () => {
      
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodo[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodo[0].id);

        expect( wrapper.find('h1').text().trim() ).toBe( 'TodoApp  (0)' );
    });
    
    
});
