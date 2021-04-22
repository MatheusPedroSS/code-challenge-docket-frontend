import {
    Box,
    makeStyles
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    const [cartorios, setCartorios] = useState([]);
    const getCartorios = async () => {
        let cartorios = await axios.get('http://localhost:8080/cartorio').then(res => setCartorios(res.data));
        return cartorios;
    }
    useEffect(() => {
        getCartorios();
    }, [])
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <Navbar />
            <div>
                {cartorios.map(cart => <Box id={cart.id}>{cart.nome}</Box>)} 
            </div>
        </Box>
    );

}