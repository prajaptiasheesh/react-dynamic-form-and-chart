import React from 'react';
import InputBox from "../inputBox/InputBox";


export const InputComponent = (props)=>{
    const { input, meta: { touched, error,  } } = props

    return (
            <InputBox
                labelText={props.title}
                inputClass={ props.inputClass }
                type={props.type}
                name={input.name}
                id={props.id}
                placeholder={props.placeholder}
                value={input.value}
                tooltip={props.tooltip}
                handleChange={input.onChange}
                errorText={touched && error }
                />
    )
}