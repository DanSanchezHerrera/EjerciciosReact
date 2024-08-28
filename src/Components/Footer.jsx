import React from 'react';
import { Typography } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <Typography variant="body2" align="center" className={styles.titulo}>
            <CopyrightIcon className={styles.titulo} /> D. Sánchez , 2024
        </Typography>
    );
};

export default Footer;
