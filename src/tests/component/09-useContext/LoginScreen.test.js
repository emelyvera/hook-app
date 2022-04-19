import React from "react";
import { mount } from 'enzyme';
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en el componente <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen />

        </UserContext.Provider>
    );

    test('should de mostarrse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('should de ejecutar el setUser con el argumento esprado', () => {
/**
 * cualquiera de las siguientes dos, son lo mismo 
 */
        //wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();


        expect(setUser).toHaveBeenCalledWith({
            id: 123,
            name: 'emely'
        })

    });

});
