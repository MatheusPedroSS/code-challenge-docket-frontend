import React from 'react'
import {
    Box,
    makeStyles, 
} from '@material-ui/core'
import Navbar from '../components/Navbar';

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column'
    }
})

const Inicial = (props) => {

    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <Navbar />
        </Box>
    );

}

export default Inicial;