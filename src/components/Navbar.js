import {
    Box,


    Button, makeStyles
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    root: {
        marginTop:0,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#000",
        flexGrow: 1,
        height: 60
    },
    buttonInicio: {
        fontSize: 20,
        paddingLeft: 15,
        color: "#fff"
    },
    buttonIns: {
        fontSize: 20,
        paddingRight: 15,
        color: "#fff"
    }
})

const Navbar = (props) => {

    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <Button className={classes.buttonInicio} href="/">Inicio</Button>
            <div style={{display: "flex", flexGrow: 1, justifyContent: "space-between"}} />
            <Button className={classes.buttonIns} href="/cad-cartorio">Cadastrar Cartorio</Button>
        </Box>
    );

}

export default Navbar;