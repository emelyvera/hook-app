import { useFetch } from "../../hooks/useFetch";
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en useFetch', () => {

    test('should de retornar la informacion por defecto', () => {
      
        const{ result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const {data, loading, error} = result.current;

        expect( data ).toBe( null );
        expect( loading ).toBe( true );
        expect( error ).toBe( null );

     });

   //   test('should de tener la informacion deseada, loading false, error false', async() => {
       
   //      const{ result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
   //      await waitForNextUpdate();

   //      const {data, loading, error} = result.current;

   //      expect( data.length ).toBe(1);
   //      expect( loading ).toBe(false);
   //      expect( error ).toBe(null);

   //   });

   //   test('should de manejar el error', async() => {
   //     /**
   //      * a veces no pasa porque se demora mucho en dar el resultado la peticion 
   //      */
   //      const{ result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2'));
   //      await waitForNextUpdate();

   //      const {data, loading, error} = result.current;

   //      expect( data).toBe(null);
   //      expect( loading ).toBe(false);
   //      expect( error ).toBe('No se pudo crgar la info');
   //   });
     

    
     
    
})