import React, { useState } from 'react';
import { Box, Typography, Checkbox, FormControlLabel, Button, Select, MenuItem } from '@mui/material';
import { GiBananaPeeled } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { GiPeach } from "react-icons/gi";
import { GiGrapes } from "react-icons/gi";
import styles from './Form.module.css'



const fruits = [
    { name: 'plátano', tasty: true, icon: <GiBananaPeeled className={styles.banana} /> },
    { name: 'manzana', tasty: true, icon: <FaAppleAlt className={styles.manzana} /> },
    { name: 'durazno', tasty: true, icon: <GiPeach className={styles.durazno} /> },
    { name: 'uvas', tasty: true, icon: <GiGrapes className={styles.uva} /> },
];

export default function FruitForm() {
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(selectedFruit.tasty);

    function handleSubmit(event) {
        event.preventDefault();
        setIsTasty(selectedFruit.tasty);
    }

    function handleFruitChange(event) {
        const fruit = fruits.find(fruit => fruit.name === event.target.value);
        setSelectedFruit(fruit);
    }

    return (
        <>
        <Typography variant="subtitle1" gutterBottom>
            En este ejercicio se practicó el manejo del estado con useState, la selección de opciones con un Select, la interacción con un Checkbox, 
            y la visualización de información basada en el estado seleccionado.
        </Typography>
        <form onSubmit={handleSubmit}>
            <div className={styles.contenedor}>
            <Select className={styles.elemento} value={selectedFruit.name} onChange={handleFruitChange}>
                {fruits.map((fruit, idx) =>
                    <MenuItem key={idx} value={fruit.name}>{fruit.name}</MenuItem>
                )}
            </Select>
            <FormControlLabel
                className={styles.elemento} 
                control={<Checkbox checked={isTasty} onChange={e => setIsTasty(e.target.checked)} />}
                label="¿Es delicioso?"
            />
            </div>
            <div className={styles.contenedor}>
            <Box>
                {selectedFruit.icon && <Box>{selectedFruit.icon}</Box>}
                <Typography className={styles.elemento} >{isTasty ? ' Es Delicioso' : 'No es delicioso'}</Typography>
            </Box>
            </div>
        </form>
        </>
    );
}
