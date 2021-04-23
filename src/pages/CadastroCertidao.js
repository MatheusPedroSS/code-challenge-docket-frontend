import React, { useEffect, useState } from 'react'
import {
    Box,
    ButtonBase,
    makeStyles, 
} from '@material-ui/core';
import {Form} from '@unform/web';
import axios from 'axios';
import Navbar from '../components/Navbar';
import InputUnForm from '../components/Form';


const useStyles = makeStyles({
    root: {
    },
    cartorio: {
        width: 600
    },
    endereco: {
        display: 'flex',
        flexDirection: 'column'
    },
    boxEndereco: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#000',
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }

})

export default function CadastroCertidao(props) {
    const classes = useStyles();

    const [certidoes, setCertidao] = useState([]);

    const getCertidoes = () => {
        return certidoes.map(certidao => certidao.nome)
    }

    useEffect(async () => {
        await axios.get(`http://localhost:8080/certidoes/${props.match.params.carId}`).then((req) => {
            setCertidao(req.data);
        })
    },[])

    async function handleSubmit(certidao) {
        console.log(certidao)
        await axios.post('http://localhost:8080/certidao', certidao);
    }

    return (
        <Box className={classes.root}>
            <Navbar />
            <Form onSubmit={handleSubmit}>
                <Box className={classes.cartorio}>
                    <InputUnForm name="nome" placeholder={'Nome Certidão'}/>
                    <InputUnForm name="cartorioId" defaultValue={props.match.params.carId} disabled={true}/>
                </Box>
                <button className={classes.button} type='submit'>Enviar</button>
            </Form>
            {getCertidoes()}
        </Box>
    );
}