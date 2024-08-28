import React, { useState } from 'react';
import { Typography,TextField, Button } from '@mui/material';


const MensajeFormulario = (props) => {
    const [mensaje, setMensaje] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        props.onNuevoMensaje(mensaje); 
        setMensaje(""); 
    };

    return (
        <form onSubmit={manejarEnvio}>
            <Typography variant="h6">Establecer Mensaje</Typography>
            < p/>
            <TextField id="outlined-basic" label="Mensaje" variant="outlined" 
                sx={{ width: '400px' }}
                placeholder="Ingresa tu mensaje aquí"
                onChange={(e) => setMensaje(e.target.value)}
                value={mensaje}
            />
            <p />
            <Button variant="contained" type="submit" value="Enviar Mensaje" >
                Enviar Mensaje
            </Button>
        </form>
    );
};

export default MensajeFormulario;
