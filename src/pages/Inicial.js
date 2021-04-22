import {
    Box,
    makeStyles
} from '@material-ui/core';
import React from 'react';
import { findAll } from '../api/server';
import Navbar from '../components/Navbar';

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
    }
})

export default function Inicial() {
    console.log(findAll())
    const cartorios = async () => {
        console.log(findAll().then(c => c.map(cart => cart.nome)))
    }
    cartorios()
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <Navbar />
            <div>
                <ul>
                    {}
                </ul>   
            </div>
        </Box>
    );

}