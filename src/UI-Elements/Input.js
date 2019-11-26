import React from 'react'
import "./UI-Elements.css"

const Input = (props) => {
    return (
        <input type={props.type} placeholder={props.placeholder} onChange={props.changed} className="ui-input primary-font" />
    )
}

export default Input;