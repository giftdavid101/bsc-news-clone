import React from 'react';
import Card from '../../elements/cards';
import './cardboard.style.css';
import { colorCodes } from '../../../helpers';

const data = [
    {
        id: 1,
        title: 'GET Protocol introduces NFT ticketing; minting 120.000 NFTs on BSC',
        status: 'Sponsored',
        photo: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603e383522a034bedd3bbde1_ubu.jpg',
        name: 'Abriks',
        date: 'March 2, 2021',
        dcolor: 'red',
    },
    {
        id: 2,
        title: 'Smokehouse AMA Transcript',
        status: 'BSC DeFi',
        photo:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60384f6661ea98dedfc83cef_breaking%20news.jpg',
        name: 'KDOT',
        date: 'March 1, 2021',
        dcolor: 'gold',
    },
    {
        id: 3,
        title: 'DxSale Project Insight: A One-Stop Shop Token Management Platform',
        status: 'sponsored',
        photo: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d97133c7c8028ff0913b8_bsctools.jpg',
        name: 'Goon Trades',
        date: 'March 1, 2021',
        dcolor: 'red',
    },
    {
        id: 4,
        title: 'Cryptonomics:Bitcoin Stock to Flow Model Explained',
        status: 'Essentials',
        photo:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d959ec80c0d81310635c1_venus%20tutorial.jpg',
        name: 'Ace',
        date: 'March 1, 2021',
        dcolor: 'gold',
    },
    {
        id: 5,
        emag: 'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/603c39a64e593137c6b9d1bc_10.png',
    },

    {
        id: 6,
        title: 'Monday Market Recap (MMR:13 3/1/21)',
        status: 'Opinion',
        photo: 'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603d950a5326d80ec675a6d5_get.jpg',
        name: 'Goon Trades',
        date: 'March 1, 2021',
        dcolor: 'green',
    },
];

const CardBoard = () => {
    return (
        <div className={'card-board container'}>
            <div className={'card-board_cd'}>
                {data.map((el) => (
                    <Card
                        key={el.id}
                        photo={el.photo}
                        message={el.title}
                        btn={el.status}
                        emage={el.imageUrl}
                        by={el.name}
                        colur={el.dcolor}>
                        <div className={'emage'}  style={{ backgroundImage: `url('${el.emag}')` }}>
                            <img src={el.photo} alt={''} />
                            <div className={'cd-content-tag'}>
                                <div className={'cd-content-tag_card-title'}>{el.title}</div>
                                <div className={`bottns ${colorCodes}: ${el.dcolor}`}>{el.status}</div>

                                <div className={'cd-content-tag_card-end-bottom'}>
                                    <div className={'cd-content-tag_card-end-bottom_source'}>
                                        <div>
                                            <span ><span className={'by-text'}>by</span>{el.name}</span>
                                        </div>
                                        <div className={'date'}>{el.date}</div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CardBoard;
