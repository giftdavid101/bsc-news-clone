import React from 'react';
import Button from '../button';
import './newsletter.style.css';

const NewsLetter = () => {
    return (
        <div className={'newsletter'}>
            <p>Subscribe to join our weekly newsletter </p>
            <div className={'inp-btn'}>
                <input value={'Email'} type={'email'} />
                <Button>Submit</Button>
            </div>
        </div>
    );
};

export default NewsLetter;
