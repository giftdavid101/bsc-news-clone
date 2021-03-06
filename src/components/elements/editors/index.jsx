import React, { useState } from 'react';
import './editors.style.css';

const Editors = () => {
    const [selected, setActiveTab] = useState('edit');
    const text = (selection) =>
        selection === 'edit'
            ? 'Dive Into DeFi: It’s Time For A Serious Conversation (Don’t Be a Degen Part 2)'
            : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet dolore';
    return (
        <div className={'editors'}>
            <div className={'editors_ec'}>
                <div className={'editors_ec_e-h-header'}>
                    <p
                        onClick={() => setActiveTab('edit')}
                        className={`editors_ec_e-h-header_hbox ${selected === 'edit' ? 'is-active' : ''}`}>
                        Editors Choice
                    </p>
                    <p
                        onClick={() => setActiveTab('hot')}
                        className={`editors_ec_e-h-header_hbox ${selected === 'hot' ? 'is-active' : ''}`}>
                        Hot Stories
                    </p>
                </div>
                <div className={'editors_ec_story-board'}>
                    {Array(5)
                        .fill(text(selected))
                        .map((el, i) => (
                            <div className={'editors_ec_story-board_sb'} key={i}>
                                <a href={'/'}>{el}</a>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Editors;
