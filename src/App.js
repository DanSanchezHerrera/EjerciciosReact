import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Home from './Pages/Home.jsx';
import { createTheme } from '@mui/material/styles';
import { purple, pink } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: pink[500],
        },
    },
});

function App() {
    // Formulario
    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    // Mensajes
    const [mensajeActual, setMensajeActual] = useState("No hay mensajes");

    const manejarNuevoMensaje = (nuevoMensaje) => {
        setMensajeActual(nuevoMensaje);
    };

    // Color Box
    const [colors, setColors] = useState([]);

    const handleColorSubmit = (color) => {
        setColors([...colors, color]);
    };

    const handleRemoveColor = (index) => {
        setColors(colors.filter((_, i) => i !== index));
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Home 
                    colors={colors} 
                    handleColorSubmit={handleColorSubmit} 
                    handleRemoveColor={handleRemoveColor}
                />
            </div>
        </ThemeProvider>
    );
}

export default App;
