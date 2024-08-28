import React, { useState } from 'react';
import useList from './useList';
import { Typography, TextField, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Edit as EditIcon, Check as CheckIcon, RemoveCircle as RemoveCircleIcon } from '@mui/icons-material';
import style from './Lista.module.css';

export default () => {
    const [val, setVal] = useState('');
    const { list, add, remove, update } = useList([]);

    const [editIndex, setEditIndex] = useState(-1);
    const [editVal, setEditVal] = useState('');
    const [open, setOpen] = useState(false);
    function handleSubmit() {
        if (val.trim().length >= 3) {
            add(val);
            setVal('');
        } else {
            setOpen(true); 
        }
    }

    function handleEdit(index, value) {
        setEditIndex(index);
        setEditVal(value);
    }

    function handleUpdate(index) {
        if (editVal.trim().length >= 3) {
            update(index, editVal);
            setEditIndex(-1);
        } else {
            alert('El valor debe tener al menos tres caracteres.');
        }
    }

    function handleRemove(index) {
        remove(index);
    }

    const handleClose = () => {
        setOpen(false); 
    };

    return (
        <>
        <Typography variant="subtitle1" gutterBottom>
            En este ejercicio se practicó un custom hook para manejar la lógica de la lista, incluyendo añadir, eliminar y actualizar elementos.
            Además se practicó renderizado condicional y validación de entrada.
        </Typography>
        <div className={style.contenedor}>
            <div className={style.caja}>
                <TextField id="outlined-basic" label="Ingresa un valor a la lista" variant="outlined"
                    onChange={(e) => setVal(e.target.value)}
                    value={val}
                />
                < p/>
                <Button variant="contained" onClick={handleSubmit}>Añadir</Button>
            </div>

            <div className={style.caja}>
                {list.map((item, i) => (
                    <div className={style.lista} key={i}>
                        {editIndex === i ? (
                            <>
                                <TextField id="outlined-basic" variant="outlined"
                                    onChange={(e) => setEditVal(e.target.value)}
                                    value={editVal}
                                />
                                <IconButton onClick={() => handleUpdate(i)}>
                                    <CheckIcon />
                                </IconButton>
                            </>
                        ) : (
                            <>
                                <Typography>{item}</Typography>
                                <IconButton onClick={() => handleEdit(i, item)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleRemove(i)}>
                                    <RemoveCircleIcon />
                                </IconButton>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    El valor debe tener al menos tres carácteres.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}