import React from 'react';
import './input.scss'

 const Input = ({placeHolder , value , onChange}) => {
    return (
        <input
         type="text"
         className='input'
         value={value}
         onChange={(e)=> onChange(e)}
         placeholder={placeHolder} />
    )
}

export default Input