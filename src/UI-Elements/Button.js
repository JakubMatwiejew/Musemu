import React from 'react';
import "./UI-Elements.css"

const Button = (props) => {
    return (
        <button onClick={props.clicked} className="ui-button">{props.text}</button>
    )
}

export default Button;