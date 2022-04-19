import { useState } from "react";
/**
 * *  es un custom hook se encarga de manejar los formularios, recibiendo un onjeto 
 * * que tiene propiedades 
 * * se encarga de limpiar miinput
 */

export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    /**
     * *se encarga de limpiar miinput
     */
    const reset = () => {
        setValues(initialState)
    };

    /**
     * * Aqui desestructuramos el evento e
     * * el name que recivo en el evento e.target.name es el  atributo name del input 
     */

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value
        });
    }
    
    return [values, handleInputChange, reset];

};
