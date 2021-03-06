import React from 'react';
import './button.style.css';

const Button = ({ children }) => {
    return <div className={'btn'}>{children}</div>;
};

export default Button;
