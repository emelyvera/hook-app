import React, { useRef } from 'react';
import '../01-useState/counter.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    //console.log(ref);

    /**
     * *cuando le doy el click en el boton lo que hago es que el focus o selectque me hace seleccionar y enfcar para 
     * * escibir sea en el input
     * * con el useRef se pasa de hacerlo con document a hacerlo como digue
     */
    // const handleClick = () => {
    //     document.querySelector('input').select();
    // }

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                className='form-control'
                placeholder='Su nombre'
            />


            <button
                className='btn btn-outline-primary mt-2'
                onClick={handleClick}>
                Focus
            </button>
        </>
    )
};
