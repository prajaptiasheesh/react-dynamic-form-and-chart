import React from 'react'

// import { countryOptions } from '../common'

const SelectBox = ({  className, name, placeholderText, hideDefaultSelectOption, options, onChange,  }) => {


    return (
            <select 
                name={name}
                className={className}
                placeholder={placeholderText}
                onChange={(event) => onChange(event)}
                >
                   { !hideDefaultSelectOption ? <option disabled value={null} selected={true} > Please select an option  </option> : null }
                    { Array.isArray( options) && options.map((item, index)=> <option key={index} value={item.value} selected={item.selected} > {item.label} </option>) }
            </select>
    )
}

export default SelectBox

