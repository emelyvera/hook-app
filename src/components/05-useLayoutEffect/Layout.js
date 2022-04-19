import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css'

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    /**
     * * cuando data no ha cargado es null y la negacin de null es true y 
     * * !!null es false y data en 0 cumple la condicion 
     * * si existed la data (!!data) entonces (&&) extrae la pocision 0 de la data (data[0])
     */
    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote className='blockquote text-rigth'>

                <p
                    className='mb--0'
                    ref={pTag}
                >
                    {quote}
                </p>

            </blockquote>

            <pre>
                ubicacion={JSON.stringify(boxSize, null, 3)}
            </pre>

            <button
                className='btn btn-primary'
                onClick={increment}>
                Siguiente quote
            </button>

        </>

    )
};
