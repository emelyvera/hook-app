import React, { useEffect, useState } from 'react';
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    /**
     * * Aqui estamos desestructurando el objeto de formState
     */
    const { name, email } = formState;

    /**
     * *solo debe dispararse una vez cuando se cargo la pag 
     */
    useEffect(() => {
        
    },[]);

    /**
     * *este se activa cuando el formulario cambio, cada que escribo algo 
     */
    useEffect(() => {
        
    },[formState]);

    /**
     * *solo cuando el email cambie 
     */
    useEffect(() => {
        
    },[email]);

    /**
     * * Aqui desestructuramos el evento e
     * * el name que recivo en el evento e.target.name es el  atributo name del input 
     */
    const handleInputChange = ({target}) => {
        
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-gruop'>
                <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu Nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={handleInputChange}
                />
            </div>



            <div className='form-gruop'>
                <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={handleInputChange}
                />
            </div>

            { name==='123' && <Message />}

        </>
    )
};
