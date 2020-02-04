import React from 'react';

const Button = (props) =>
    <button onClick={props.action}>
        {props.buttonText}
    </button>

export default Button;