import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';

const NoMondays = () => {
    const [message, setMessage] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    useEffect(() => {
        const checkMonday = async () => {
            try {
                const result = await new Promise((resolve, reject) => {
                    if (new Date().getDay() !== 1) {
                        resolve("¡Gracias a dios no es lunes!");
                    } else {
                        reject("Mis condolencias, es lunes");
                    }
                });
                setMessage(result);
            } catch (error) {
                setMessage(error);
            }
        };

        checkMonday();
    }, []);

    return (
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    En este ejercicio se Hooks de React useState y useEffect, condicionales (el código revisa
                    si es actualmente lunes), async y await se usan para manejar la promesa y try...catch se utiliza para manejar posibles errores. 
                </Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>
                    {show ? 'Cerrar' : '¿Hoy es lunes?'}
                </Button>
                {show && (
                    <Box sx={{ p: 1, my: 1, border: '1px solid' }}>
                        {message}
                    </Box>
                )}
            </div>
    );
};

export default NoMondays;
