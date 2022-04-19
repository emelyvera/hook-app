import React from "react";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { mount } from 'enzyme';
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en el componente <HomeScreen />', () => {
  
    const user ={
        name: 'emely',
        email: 'emel@jbfdg'
    };

    const wrapper =mount (
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>
    )

    test('should de mostrarse correctamente', () => {
      
        expect(wrapper).toMatchSnapshot();

    });
    
});
