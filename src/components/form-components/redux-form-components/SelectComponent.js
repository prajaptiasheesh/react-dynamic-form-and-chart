import React from 'react';
import SelectBox from '../selectBox/SelectBox';



 export default function SelectComponent(props){
 
        const { input, meta: { touched, error } } = props

        const handleChange = (event)=>{
            input.onChange(event.target.value)
        }

        return (<React.Fragment> 
                    <SelectBox
                        placeholder={input.placeholder}
                        className={props.className}
                        options={props.options}
                        value={input.value} 
                        name={input.name} 
                        onChange={handleChange}
                        hideDefaultSelectOption ={props.hideDefaultSelectOption}
                        />
                    <span style={{ color: "red", fontSize: "14px" }} >{touched && error}</span>                    
                </React.Fragment>
                )
 }
 

 
