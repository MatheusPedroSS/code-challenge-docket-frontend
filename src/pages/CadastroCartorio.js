import React from 'react'
import {
    Box,
    Button,
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

export default function CadastroCartorio() {
    const classes = useStyles();

    async function handleSubmit(cartorio) {
        await axios.post('http://localhost:8080/cartorio', cartorio).then(() => (
            alert(`Cartorio ${cartorio.nome}, inserido com sucesso!`)
        ));
    }

    return (
        <Box className={classes.root}>
            <Navbar />
            <Form onSubmit={handleSubmit}>
                <Box className={classes.cartorio}>
                    <InputUnForm name="nome" placeholder={'Nome Cartorio'}/>
                </Box>
                <Box className={classes.endereco}>
                    <Box className={classes.boxEndereco}>
                        <InputUnForm name="endereco.logradouro" placeholder={'logradouro'}/>
                        <InputUnForm name="endereco.numero" placeholder={'numero'}/>
                        <InputUnForm name="endereco.bairro" placeholder={'bairro'}/>
                    </Box>
                    <Box className={classes.boxEndereco}>
                        <InputUnForm name="endereco.cidade" placeholder={'cidade'}/>
                        <InputUnForm name="endereco.estado" placeholder={'estado'}/>
                        <InputUnForm name="endereco.cep" placeholder={'cep'}/>
                    </Box>
                </Box>
                <ButtonBase className={classes.button} type='submit'>Enviar</ButtonBase>
            </Form>
        </Box>
    );
}