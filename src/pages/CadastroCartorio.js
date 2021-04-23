import React, { useCallback, useEffect, useState } from 'react'
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

export default function CadastroCartorio(props) {
    const classes = useStyles();

    const [cart, setCart] = useState({});

    async function handleSubmit(cartorio) {
        await axios.post('http://localhost:8080/cartorio', cartorio).then(() => (
            alert(`Cartorio ${cartorio.nome}, inserido com sucesso!`)
        ));
    }

    const getCart = async () => {
        await axios.get(`http://localhost:8080/cartorio/${props.match.params.id}`).then(cart => setCart(cart.data))
    }

    useCallback(() => {
        getCart()
    })

    return (
        <Box className={classes.root}>
            <Navbar />
            <Form onSubmit={handleSubmit}>
                <Box className={classes.cartorio}>
                    <InputUnForm name="nome" placeholder={'Nome Cartorio'}  
                        defaultValue={props.match.params.id !== undefined ? cart.nome: ""} />
                </Box>
                <Box className={classes.endereco}>
                    <Box className={classes.boxEndereco}>
                        <InputUnForm name="endereco.logradouro" placeholder={'logradouro'}
                            defaultValue={props.match.params.id !== undefined ? cart.endereco.logradouro: ""}/>
                        <InputUnForm name="endereco.numero" placeholder={'numero'}
                            defaultValue={props.match.params.id !== undefined ? cart.endereco.numero: ""}/>
                        <InputUnForm name="endereco.bairro" placeholder={'bairro'}
                            defaultValue={props.match.params.id !== undefined ? cart.endereco.bairro: ""}/>
                    </Box>
                    <Box className={classes.boxEndereco}>
                        <InputUnForm name="endereco.cidade" placeholder={'cidade'}
                            defaultValue={props.match.params.id !== undefined ? cart.endereco.cidade: ""}/>
                        <InputUnForm name="endereco.estado" placeholder={'estado'}
                            defaultValue={props.match.params.id !== undefined ? cart.endereco.estado: ""}/>
                        <InputUnForm name="endereco.cep" placeholder={'cep'}
                            defaultValue={props.match.params.id !== undefined ? cart.endereco.cep: ""}/>
                    </Box>
                </Box>
                <button className={classes.button} type='submit' href="/">{
                    props.match.params.id !== undefined ? "Atualizar": "Salvar"
                }</button>
            </Form>
        </Box>
    );
}