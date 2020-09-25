import React from 'react';

const InputBox = ({ tooltip, id,name,handleChange,handleBlur, placeholder, inputClass, type, value, errorText, errorClass }) => (
        <>
            <input 
                name={name} 
                id={id}
                onBlur={handleBlur && handleBlur} 
                onChange={handleChange && handleChange} 
                type={type} 
                data-tip={tooltip}
                placeholder={placeholder} 
                value={value && value} 
                className={inputClass} />
            <span style={{ color: "red", fontSize: "14px" }}>{errorText}</span>
        </>
);

export default InputBox;