import React from 'react'
import {
    Box,
    Input,
    makeStyles, 
} from '@material-ui/core'
import Navbar from '../components/Navbar';

const useStyles = makeStyles({
    formCadCart: {
        display: 'flex',
        flexGrow: 2,
        padding: 15,
        width: "100%"
    },
    formCadEnd: {
        display: 'flex',
        flexGrow: 2,
        padding: 15,
    }
})

const CadastroCartorio = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <Navbar />
            <Box className={classes.formCadEnd}>
                <Input placeholder="Nome"/>
            </Box>
            <Box className={classes.formCadEnd}>
                <Input placeholder="Logradouro"/>
                <Input placeholder="numero"/>
                <Input placeholder="bairro"/>
                <Input placeholder="cidade"/>
                <Input placeholder="estado"/>
                <Input placeholder="cep"/>
            </Box>
        </Box>
    );
}

export default CadastroCartorio