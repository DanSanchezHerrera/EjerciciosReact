import React from 'react';
import { Typography, Box} from '@mui/material';

const MensajeVisualizacion = (props) => {
    return (
        <>
        <Typography variant="h6">Mensaje Actual</Typography>
        < p/>
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            <pre>{props.mensaje}</pre>
        </Box>
        </>
    );
};

export default MensajeVisualizacion;
