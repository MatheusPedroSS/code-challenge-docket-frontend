import React, {useEffect, useRef} from 'react'
import { useField } from '@unform/core'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    input: {
        width: '30%',
        outline: 'none',
        borderWidth: 0,
        borderBottomWidth: 1,
        margin: 10,
        fontSize: 15
    }
})

export default function InputUnForm ({name, ...rest}) {
    const inputRef = useRef(null);
    const {fieldName, registerField} = useField(name);
    
    const classes = useStyles();

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return(
        <input className={classes.input} ref={inputRef} {...rest}/>
    );
}