import React, { useState } from 'react';
import { Container, Typography, Link, Divider, Tab, Tabs, Box, Grid, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { FaReact } from "react-icons/fa";
import { Route, Routes, useNavigate } from 'react-router-dom';
import styles from "./Home.module.css";
import LightSwitch from "../Components/LightSwitch.js";
import Footer from "../Components/Footer.jsx";
import NoMondays from '../Components/NoMondays.js';
import Colorbox from '../Components/Colorbox.js';
import Contadosube from '../Components/Contadosube.js';
import colorName from 'color-name';
import MensajeFormulario from '../Components/MensajeFormulario.js';
import MensajeVisualizacion from '../Components/MensajeVisualizacion.js';
import Api from '../Components/Api.js';
import Lista from '../Components/Lista.js'
import FormularioSeleccion from '../Components/FormularioSeleccion.js'

const Home = ({ colors, handleColorSubmit, handleRemoveColor }) => {
    const navigate = useNavigate();
    const [colorInput, setColorInput] = useState('');
    const [mensajeActual, setMensajeActual] = useState("No hay mensajes");
    const [open, setOpen] = React.useState(false); // Nuevo estado para controlar el modal

    const handleChange = (event, newValue) => {
        navigate(newValue);
    };

    const handleInputChange = (e) => {
        setColorInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (colorName[colorInput.toLowerCase()]) {
            handleColorSubmit(colorInput);
            setColorInput('');
        } else {
            setOpen(true); // Abre el modal si el color no es válido
        }
    };

    const manejarNuevoMensaje = (nuevoMensaje) => {
        setMensajeActual(nuevoMensaje);
    };

    const handleClose = () => {
        setOpen(false); // Cierra el modal
    };

    return (
        <Container className={styles.contenedor}>
            <Typography variant="h4" gutterBottom className={styles.titulo}>
                Ejercicios con REACT
                <FaReact />
            </Typography>
            <Typography variant="body1" paragraph>
                Recopilación de ejercicios con REACT, JS y Material UI vistos durante el bootcamp de <Link href="https://www.codingdojo.la/">Coding Dojo</Link>
            </Typography>
            <Divider />
            
            <Tabs
                value={window.location.pathname}
                onChange={handleChange}
                aria-label="navigation tabs"
                sx={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}
            >
                <Tab label="Light Switch" value="/onoff" component={Link} to="/onoff" />
                <Tab label="¿Es lunes?" value="/nomondays" component={Link} to="/nomondays" />
                <Tab label="Cajas de colores" value="/colorbox" component={Link} to="/colorbox" />
                <Tab label="Contador" value="/contador" component={Link} to="/contador" />
                <Tab label="Mensaje" value="/mensaje" component={Link} to="/mensaje" />
                <Tab label="Api" value="/api" component={Link} to="/api" />
                <Tab label="Lista" value="/lista" component={Link} to="/lista" />
                <Tab label="Selección" value="/select" component={Link} to="/select" />
            </Tabs>

            <Routes>
                <Route path="/onoff" element={<TabPanel><LightSwitch /></TabPanel>} />
                <Route path="/nomondays" element={<TabPanel><NoMondays /></TabPanel>} />
                <Route path="/colorbox" element={
                    <TabPanel>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="subtitle1" gutterBottom>
                                En este ejercicio se practicó recepción y uso de propiedades (props) para personalizar el componente.
                                Importación y aplicación de estilos mediante un archivo CSS Module y manejo de estado desde padre a hijo.
                            </Typography>
                            <TextField
                                label="Ingresa un color en inglés"
                                value={colorInput}
                                onChange={handleInputChange}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                            <Button type="submit" variant="contained" color="primary">Añadir Color</Button>
                        </form>
                        {colors.map((color, index) => (
                            <Colorbox key={index} color={color} onRemove={() => handleRemoveColor(index)} />
                        ))}
                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Error</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Por favor, ingresa un color válido en inglés.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cerrar</Button>
                            </DialogActions>
                        </Dialog>
                    </TabPanel>
                } />
                <Route path="/contador" element={<TabPanel>
                    <Typography variant="subtitle1" gutterBottom>
                        En este ejercicio se practicó contador controlado por un componente HOC, se definen dos funciones, increment y 
                        decrement, que modifican el estado del contador, junto con condicionales para manejar lógicas de negocio.
                    </Typography>
                    <Contadosube /></TabPanel>} />
                <Route path="/mensaje" element={<TabPanelMensajeFormulario onNuevoMensaje={manejarNuevoMensaje} mensaje={mensajeActual} />} />
                <Route path='/api' element={<TabPanel>
                    <Typography variant="subtitle1" gutterBottom>
                    En este ejercicio se practicó integración de API externa: Se utiliza fetch para hacer una solicitud a la API de Star Wars 
                    y se actualiza el estado state con los resultados de la solicitud.
            </Typography>
                    <Api />
                    </TabPanel>} />
                <Route path='/lista' element={<TabPanel><Lista /></TabPanel>} />
                <Route path='/select' element={<TabPanel><FormularioSeleccion /></TabPanel>} />
            </Routes>
            <Divider />
            <Footer />
        </Container>
    );
};

const TabPanelMensajeFormulario = (props) => {
    const { onNuevoMensaje, mensaje } = props;
    const [nuevoMensaje, setNuevoMensaje] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        onNuevoMensaje(nuevoMensaje);
        setNuevoMensaje("");
    };

    return (
        <>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'colum',  paddingX: 10, paddingTop: 8}}>
            <Typography variant="subtitle1" gutterBottom>
                En este ejercicio se practicó manejo de estado local con useState, Control de formularios, se actualiza el estado cada 
                vez que el usuario escribe algo en el campo de texto, y se propaga el evento al enviar el formulario.
            </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row',  paddingX: 10, paddingTop: 8, paddingBottom: 3}}>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <MensajeFormulario onNuevoMensaje={onNuevoMensaje} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <MensajeVisualizacion mensaje={mensaje} />
                </Grid>
            </Grid>
        </Box>
        </>
    );
};

const TabPanel = (props) => {
    const { children } = props;

    return (
        <Box sx={{ minHeight: 'calc(100vh - 256px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;