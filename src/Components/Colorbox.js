import React from 'react';
import styles from './Colorbox.module.css';


const Colorbox = ({ color, onRemove }) => {
    const boxStyle = {
        backgroundColor: color,
    };

    return (
        <div className={styles['color-box']} style={boxStyle}>
            <button className={styles['remove-button']} onClick={onRemove}>x</button>
        </div>   
);
};

export default Colorbox;
