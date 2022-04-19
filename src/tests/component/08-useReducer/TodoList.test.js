import React from 'react';
import { shallow } from "enzyme";
import TodoList from '../../../components/08-useReducer/TodoList';
import { demoTodo } from '../../fixtures/demoTodo';




describe('Pruebas en <TodoList/>', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList
            todos={demoTodo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
        />
    );

    test('should de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should de tener dos <TodoListItem />', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodo.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete'))
            .toEqual(expect.any(Function));

    });

});
