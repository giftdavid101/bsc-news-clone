import React from 'react';
import './cards.style.css';

const Card = ({ children, className }) => {
    return <div className={`card ${className ? className : ''}`}>{children}</div>;
};

export default Card;
