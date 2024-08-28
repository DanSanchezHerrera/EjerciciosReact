import React, { Component } from 'react';
import './LightSwitch.css';
import { IconButton, ThemeProvider, Typography } from '@mui/material';
import { Icon } from '@mui/material';
import Lightbulb from '@mui/icons-material/Lightbulb';
import { createTheme } from '@mui/material/styles';
import { amber, grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: amber[500],
        },
        secondary: {
            main: grey[500],
        }
    },
});

class LightSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "encendida"
        };
    }
    
    flipSwitch = () => {
        if( this.state.position === "encendida" ) {
            this.setState({ position: "apagada" });
        } else {
            this.setState({ position: "encendida" });
        }
    }

    render() {
        const containerClass = this.state.position === "encendida" ? "light-mode" : "dark-mode";
        const iconColor = this.state.position === "encendida" ? "primary" : "secondary";

        return (
            <ThemeProvider theme={theme}>
                <Typography variant="subtitle1" gutterBottom>
                    En este ejercicio se practicó State y setState, eventos y manejadores de eventos, y
                    condicionales en renderizado.
                </Typography>
                <fieldset className={containerClass}>
                    <IconButton aria-label="interruptor" color={iconColor} onClick={this.flipSwitch}>
                        <Icon as={Lightbulb} />
                    </IconButton>
                    <p>La luz está { this.state.position }</p>
                </fieldset>
            </ThemeProvider>
        );
    }
}

export default LightSwitch;
