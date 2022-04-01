import React from 'react';
import './item.scss'

 const Item = ({lable,className,disabled, type,onClick}) => {
    return (
        <button
         disabled={disabled}
         className={`button ${className||''} ${type}`}
         onClick={onClick}>
             {lable}
        </button>
    )
}

export default Item