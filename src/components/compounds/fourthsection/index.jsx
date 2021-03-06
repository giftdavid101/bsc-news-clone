import React from 'react';
import FSCard from '../../elements/fscard';
import './fourthsection.style.css';
import { colorCodes } from '../../../helpers';

const data = [
    {
        id: 1,
        heading: 'Trading Toolkits: Scalping Explained',
        status: 'Essentials',
        emage: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/601d74a079f88f31023eed67_TT%20purp.jpg',
        date: 'February 28, 2021',
        by: 'Ace',
        fscolor: 'red',
        content:
            'Although scalping may mean fast profits that compound in the long run, it’s perilous and discouraged for new market entrants.',
    },
    {
        id: 2,
        heading: 'WowSwap AMA Transcript',
        status: 'BSC DeFi',
        emage: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603a9bd062097862c06f29b8_wowswap_ama.png',
        date: 'February 27, 2021',
        by: 'KDOT',
        fscolor: 'gold',
        content:
            'Although scalping may mean fast profits that compound in the long run, it’s perilous and discouraged for new market entrants',
    },
    {
        id: 3,
        heading: 'Trading Toolkits: Scalping Explained',
        status: 'Essentials',
        emage: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603a6ffd677543c746b97599_hyperjump.jpg',
        date: 'February 27, 2021',
        by: 'Rich',
        fscolor: 'red',
        content:
            'The re-launch of the project shows that this team is focused on building and persevering through the tough times. This is no new project, but rather a project with a lot of experience that continues to innovate',
    },
    {
        id: 4,
        heading: 'Autofarm Fixes Venus Vault Impending Smart Contract Risk',
        status: 'BSC DeFi',
        emage: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603a8d67b611e094c629436b_break.jpg',
        date: 'February 27, 2021',
        by: 'Ace',
        fscolor: 'gold',
        content:
            'It’s important to reiterate that nothing is completely secure with current Smart Contract codes on any Dapp. However, as the technology grows, research and development are ongoing to strive towards 100% security.',
    },
];
const FourthSection = () => {
    return (
        <div className={'fourth-section container'}>
            <div>
                {data.map((el) => (
                    <FSCard key={el.id} emages={el.emage} headings={el.heading} stats={el.status}>
                        <div className={'fs-content'}>
                            <div className={'imagees'}>
                                <img src={el.emage} alt={'foto'} />
                            </div>

                            <div className={'fs-message'}>
                                <h2>{el.heading}</h2>
                                <div className={'fs-message_sdbc'}>
                                    <div className={''}>
                                        <div className={'db'}>
                                            <div className={`bottns ${colorCodes}: ${el.fscolor}`}>{el.status}</div>
                                            <div className="line" />
                                            <span>{el.date}</span>
                                            <div className="line" />
                                            <span>{el.by}</span>
                                        </div>
                                    </div>
                                    <div>{el.content}</div>
                                </div>
                            </div>
                        </div>
                    </FSCard>
                ))}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div
                            style={{
                                border: '1px solid black',
                                background: `${colorCodes('black')}`,
                                color: 'white',
                                borderRadius: '10px',
                                padding: '10px 30px',
                                margin: '20px 5px',
                            }}>
                            Load More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourthSection;
