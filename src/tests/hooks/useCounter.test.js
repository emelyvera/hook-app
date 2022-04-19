import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('pruebas en useCounter', () => {

    test('should de retornar valores por defecto', () => {

        const { result } = renderHook(() => useCounter());

        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');

    });

    test('should de tener el counter en 100', () => {

        const { result } = renderHook(() => useCounter(100));

        expect(result.current.counter).toBe(100);

    });

    test('should de incrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { increment } = result.current;

        act(() => {
            increment();
        });

        const { counter } = result.current;
        expect(counter).toBe(101);
    });

    test('should de decrementar el counter en 1', () => {

        const { result } = renderHook(() => useCounter(100));
        const { decrement } = result.current;

        act(() => {
            decrement();
        });

        const { counter } = result.current;
        expect(counter).toBe(99);
    });

    test('should de resetear el counter', () => {

        const { result } = renderHook(() => useCounter(100));
        const { reset } = result.current;

        act(() => {
            reset();
        });

        const { counter } = result.current;
        expect(counter).toBe(100);
    });



});
