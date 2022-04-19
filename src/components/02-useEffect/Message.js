import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    useEffect(() => {
        /**
        * * Extraer las coordenadas cuando solo este  este montado 
        */
        const mouseMove = (e) => {
            const coors = { x: e.x, y: e.y }
            setCoords(coors)
        }

        window.addEventListener('mousemove', mouseMove)

        return () => {
            /**
             * *cuando le pongo cualquier otra cosa me quita el mensaje h3 y me deja 
             * *de contar las coordenadas del mouse
             */
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);


    return (
        <>
            <h3>Eres Cool!</h3>
            <p>
                x:{x}
                y:{y}
            </p>
        </>
    )
};
