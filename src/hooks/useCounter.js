import { useState } from 'react'


export const useCounter = ( initialState=10 ) => {

  const [counter, setCounter] = useState(initialState);
/**
 * *tambien puedo enviarle un parametro para que me sume o reste segun yo quiera
 * *esto en mi componente debe llmarse como un callback
 */
  const increment = (  ) => {
    setCounter( counter + 1 );
  }

  const decrement = ( ) => {
    setCounter( counter - 1 );
  }

  const reset = () => {
      setCounter( initialState)
  }
 
  /**
   * *Yo puedo regresar in arreglo o un onjeto, dpenede que tan facil me sea para luego usarlo
   */
  return {
      counter,
      increment,
      decrement,
      reset
  };

};
