import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-example/MultipleCustomHooks';
import '../02-useEffect/effects.css'


export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Real Example useRef</h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className='btn btn-primary mt-50'
                onClick={() => {
                    setShow(!show)
                }}
            >
                show/Hide
            </button>

        </>
    );
};
