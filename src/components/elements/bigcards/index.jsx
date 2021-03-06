import React from 'react';
import './bigcard.style.css';

const BigCard = ({ children }) => {
    return <div className={'big-card'}>{children}</div>;
};

export default BigCard;
