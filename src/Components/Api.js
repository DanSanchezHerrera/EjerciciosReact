import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';

const Api = () => {
    const [state, setState] = useState({ people: [] });
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (show && !state.people.length) {
            setIsLoading(true);
            fetch('https://swapi.tech/api/people/')
                .then(response => response.json())
                .then(response => {
                    setState({
                        people: response.results
                    });
                })
                .catch(error => console.error('Error fetching data:', error))
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [show]);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <div>
            <Button variant="contained" onClick={handleClick} disabled={isLoading}>
                {isLoading ? 'Cargando...' : show ? 'Cerrar' : 'Mostrar resultados'}
            </Button>
            {show && (
                <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                    {state.people.map((item, index) => (
                        <div key={index}>{item.name}</div>
                    ))}
                </Box>
            )}
        </div>
    );
}

export default Api;