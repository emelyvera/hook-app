import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    /**
     * * cuando data no ha cargado es null y la negacin de null es true y 
     * * !!null es false y data en 0 cumple la condicion 
     * * si existed la data (!!data) entonces (&&) extrae la pocision 0 de la data (data[0])
     */
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading
                    ? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>

                    )
                    : (
                        <blockquote className='blockquote text-rigth'>
                            <p className='mb--0'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>

                    )
            }

            <button
                className='btn btn-primary'
                onClick={increment}>
                    Siguiente quote
            </button>

        </>

    )
};
