import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-example/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
/**
 * para suponer que me dan algo 
 */
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');


describe('pruebas en <MultipleCustomHooks />', () => {
/**
 * debe de ponerse en cada test
 */
    // useCounter.mockReturnValue({
    //     counter: 1,
    //     increment: () => { }
    // });

    test('should de mostrarse correctamente', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => { }
        });
        /**
         * esto es porque estamos usando el jest.mock
         */
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();

    });

    test('should de mostar la informacion', () => {
        useCounter.mockReturnValue({
            counter: 1,
            increment: () => { }
        });
        useFetch.mockReturnValue({
            data: [{
                author: 'emely',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb--0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('emely');

    });


});
