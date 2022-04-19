import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas del componente <HookApp />', () => {

    test('should funcionar correctamente', () => {
      
        const wrapper = shallow( <HookApp/>);
        expect( wrapper ).toMatchSnapshot();
    });
    
})