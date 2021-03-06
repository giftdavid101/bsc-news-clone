import React from 'react';
import BigCard from '../../elements/bigcards';
import './cd.style.css';
import { AiFillFolderOpen } from 'react-icons/all';

const data = [
    {
        id: 1,
        emages: [
            {
                id: 1,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601c2778bc0ebe6f98736e15_new122-20.jpg',
            },
            {
                id: 2,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/602a844c98d117acd04dc5e9_5fec033ce3bca91798c9fff6_Cryptonomics.jpg',
            },
            {
                id: 3,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601c2777168290e1d72670af_Colour%20changed%20brning-20.jpg',
            },
            {
                id: 4,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601c2778bc0ebe6f98736e15_new122-20.jpg',
            },
        ],
        heading: 'Cryptonomics',
        content: 'A educational series that covers everything Crypto and DeFi related on the Binance Smart Chain',
        status: 'Collection',
        pieces: '10+ Pieces',
    },
    {
        id: 2,
        emages: [
            {
                id: 1,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601c2c3d7c1224e8b7ce9b9d_bull%20market-20.jpg',
            },
            {
                id: 2,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/602a84b8f37b56e533dbde12_6017043a461ffe5f0ef30599_Dive%20into%20Defi%202.jpg',
            },
            {
                id: 3,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/602a84b8f37b56e533dbde12_6017043a461ffe5f0ef30599_Dive%20into%20Defi%202.jpg',
            },
            {
                id: 4,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601c2c3218d61c3ddd9af154_POOL-20.jpg',
            },
        ],
        heading: 'Dive into DEFI',
        content: "Ben Antes' column which dives into various DeFi topics and strategies",
        status: 'Collection',
        pieces: '10+ Pieces',
    },
    {
        id: 3,
        emages: [
            {
                id: 1,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601d5247203d033a8fbc5044_Swipe-20.jpg',
            },
            {
                id: 2,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601d5232aaa5366a35d1d591_Pancake%20x%20BNB%20prize-20.jpg',
            },
            {
                id: 3,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601d523bd74931937e9fb97c_Spartacus-20.jpg',
            },
            {
                id: 4,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/601d521fa4ae81a6393faa6f_Jugernaut-20.jpg',
            },
        ],
        heading: 'Project Insight',
        content: 'In-depth project research displaying the core features of the latest DeFi protocols',
        status: 'Collection',
        pieces: '20+ Pieces',
    },
    {
        id: 4,
        emages: [
            {
                id: 1,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/602a8531f5adad4823040bb0_601d74a079f88f31023eed67_TT%20purp.jpg',
            },
            {
                id: 2,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/602a844c98d117acd04dc5e9_5fec033ce3bca91798c9fff6_Cryptonomics.jpg',
            },
            {
                id: 3,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/602a852d237733150f51608e_602321051f21480e66314f7f_3-20%20(3).jpg',
            },
            {
                id: 4,
                foto:
                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/602a8531f5adad4823040bb0_601d74a079f88f31023eed67_TT%20purp.jpg',
            },
        ],
        heading: 'Trading ToolKitS',
        content: 'A educational series that covers everything Crypto and DeFi related on the Binance Smart Chain',
        status: 'Collection',
        pieces: '10+ Pieces',
    },
];
const CryptonomyDevi = () => {
    return (
        <div className={'cryptonomy-devi container'}>
            <div className={'cryptonomy-devi_cd'}>
                {data.map((el) => (
                    <BigCard key={el.id} emages={el.emages} heading={el.heading}>
                        <div className={'bg-con'}>
                            {el.emages.map((el) => (
                                <div className={'ec'} key={el.id}>
                                    <div className={'ec_ec-con'}>
                                        <div className={'emage'} key={el.id}>
                                            <img src={el.foto} alt={'foto'} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ margin: '5px' }}>
                            <div className={'heading'}>
                                <h1>{el.heading}</h1>
                            </div>
                            <div className={'cd-content'}>{el.content}</div>
                            <div className={'sp'}>
                                <h3>{el.status}</h3>
                                <div className={'pieces'}>
                                    {' '}
                                    <AiFillFolderOpen />
                                    {el.pieces}
                                </div>
                            </div>
                        </div>
                    </BigCard>
                ))}
            </div>
        </div>
    );
};

export default CryptonomyDevi;
