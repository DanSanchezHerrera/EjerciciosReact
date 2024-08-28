import React from 'react';
import Counter from './Contador';
import { IconButton, Typography } from '@mui/material';
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";



export default () => (
    <Counter
    initialValue={0}
    render={({ count, increment, decrement }) => (
    <>
    <IconButton aria-label="Incrementar" color="primary" onClick={increment}>
        <FaAngleUp />
    </IconButton>

    <IconButton aria-label="Incrementar" color="primary" onClick={decrement}>
        <FaAngleDown />
    </IconButton>
    <Typography variant="h6" gutterBottom>
        Contador: {count}
    </Typography>
    </>
)}
/>
)
