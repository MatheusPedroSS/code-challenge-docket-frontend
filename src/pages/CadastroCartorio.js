import React from 'react'
import {
    Box,
    Button,
    makeStyles, 
} from '@material-ui/core'
import {Form} from '@unform/web'
import Navbar from '../components/Navbar';
import InputUnForm from '../components/Form'
import { insertCartorio } from '../api/server';

const useStyles = makeStyles({
    
})

export default function CadastroCartorio() {
    const classes = useStyles();

    function handleSubmit(data) {
        insertCartorio(data);
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