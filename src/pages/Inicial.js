import {
    Box,
    makeStyles
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Card from '../components/Card'

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
    },
    card: {
        padding: 40,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000',
        border: true,
    }
})

export default function Inicial(props) {
    const classes = useStyles();
    const [cartorios, setCartorios] = useState([]);
    const getCartorios = async () => {
        let cartorios = await axios.get('http://localhost:8080/cartorios').then(res => setCartorios(res.data));
        return cartorios;
    }
    useEffect(() => {
        getCartorios();
    }, [])

    return(
        <Box className={classes.root}>
            <Navbar />
            <div>
                {cartorios.map(cart => <Card key={cart.id} title={cart.nome} cartorio={cart}/>)} 
            </div>
        </Box>
    );

}