import React from 'react'


import Style from './Button.module.css'

const Button = ({btnText,handleClick,icon,classStyle}) => {
    return (
        <div className={Style.box}>
            <button className={`${Style.button} ${classStyle}`} onClick={()=>handleClick()}>{icon} {btnText}</button>
        </div>
    )
}

export default Button