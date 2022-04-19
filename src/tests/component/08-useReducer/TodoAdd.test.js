import React from "react";
//import { demoTodo } from "../../fixtures/demoTodo";
import TodoAdd from '../../../components/08-useReducer/TodoAdd';
import { shallow } from 'enzyme';

describe('Pruebas en el componente <TodoAdd />', () => {
  
    const handleAddTodo =jest.fn();

    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        />
    );

    test('should de mostarse corecatmente', () => {
      
        expect(wrapper).toMatchSnapshot();
    });

    test('NO should de llmar a handleAddTodo', () => {
      
        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(0);

    });

    test('should de llamar la funcion handleAddTodo', () => {
      
        const value='Aprender React';
        wrapper.find('input').simulate('change', {
            target:{
                value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith(expect.any(Object));
        expect( handleAddTodo ).toHaveBeenCalledWith({
            // como el id es la hora y fecha entoncesa cambia y apra que pase se manda eso
            id: expect.any(Number),
            desc:value,
            done:false
        });
        

        
    });
    
    
});

