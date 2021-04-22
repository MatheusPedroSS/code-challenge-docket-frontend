import React from 'react'
import {
    Box,
    Button,
    makeStyles, 
} from '@material-ui/core';
import {Form} from '@unform/web';
import axios from 'axios';
import Navbar from '../components/Navbar';
import InputUnForm from '../components/Form';


const useStyles = makeStyles({
    
})

export default function CadastroCartorio() {
    const classes = useStyles();

    async function handleSubmit(cartorio) {
        await axios.post('http://localhost:8080/cartorio', cartorio).then(() => (
            alert(`Cartorio ${cartorio.nome}, inserido com sucesso!`)
        ));
    }

    return (
        <Box>
            <Navbar />
            <Form onSubmit={handleSubmit}>
                <InputUnForm name="nome" />
                <InputUnForm name="endereco.logradouro" />
                <InputUnForm name="endereco.numero" />
                <InputUnForm name="endereco.bairro" />
                <InputUnForm name="endereco.cidade" />
                <InputUnForm name="endereco.estado" />
                <InputUnForm name="endereco.cep" />
                <Button type='submit'>Enviar</Button>
            </Form>
        </Box>
    );
}