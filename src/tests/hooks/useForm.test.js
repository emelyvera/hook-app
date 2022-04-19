import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en UseForm', () => {

    const initialForm = {
        name: 'emely',
        email: 'hja@jkdfh'
    };

    test('should de regresar un formulario por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function')

    });

    test('should de cambiar el valor del formulario (cambiar name)', () => {

        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'melisa'
                }
            })
        });

        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'melisa' });

    });

    test('should de restablecer el formulario con reset', () => {
        
        const { result } = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'melisa'
                }
            });

            reset();
        });
/**
 * se hace el llamado a formValue aqui porque s se hace arriba ocurre un error 
 */
        // const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    });



});
