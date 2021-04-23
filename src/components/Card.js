import {
    Box,
    ButtonBase,
    makeStyles
} from '@material-ui/core';
import {
    DeleteSharp,
    MoreSharp,
    BallotSharp,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000',
        border: true,
    },
    title: {
        fontSize: 25
    },
    icons: {
        paddingLeft: 15,
        paddingRight: 15,
    }
})

export default function Card({title, cartorio, ...rest}) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box {...rest} className={classes.title}>
                {title}
            </Box>
            <Box style={{flex: 1}}/>
            <Box>
                <ButtonBase disableTouchRipple={true} className={classes.icons} href={'cad-certidao/'+cartorio.id}>
                    <BallotSharp titleAccess={"Listar Cetidões"}/>
                </ButtonBase>
                <ButtonBase disableTouchRipple={true} className={classes.icons} href={'alt-cartorio/'+cartorio.id}>
                    <MoreSharp titleAccess={"Alterar Cartorio"}/>
                </ButtonBase>
                <ButtonBase disableTouchRipple={true} className={classes.icons} onClick={() => console.log('clic')}>
                    <DeleteSharp titleAccess={"Deletar Cartorio"}/>
                </ButtonBase>
            </Box>
        </Box>
    );
}