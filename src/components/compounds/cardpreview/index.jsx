import React from 'react';
import Card from '../../elements/cards';
import './cardpreview.style.css';
import { colorCodes } from '../../../helpers';

const cpData = [
    {
        id: 1,
        title: 'Crudeoil AMA Transcript',
        status: 'BSC DeFi',
        photo:
            'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603edc351c7f2d165e6f6ab9_Copy_of_25TH_Jan_8.png',
        name: 'KDOT',
        date: 'March 3, 2021',
    },
    {
        id: 2,
        title: '',
        status: '',
        photo:
            'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/603041792cc81e64844c9fa9_photo_2021-02-19_22-53-17.jpg',
        name: '',
        date: '',
    },
    {
        id: 3,
        title: 'Binance Smart Chain Recap Analytics and Analysis (03/04/2021)',
        status: 'BSC DeFi',
        photo: ' https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/603e383522a034bedd3bbde1_ubu.jpg',
        name: 'Rich',
        date: 'March 4 2021',
    },
];
const CardPreview = () => {
    return (
        <div className={'card-preview container'}>
            <div className={'card-preview_cp'}>
                {cpData.map((el) => (
                    <Card
                        key={el.id}
                        photo={el.photo}
                        message={el.title}
                        btn={el.status}
                        emage={el.imageUrl}
                        by={el.name}
                        colur={el.dcolor}>
                        <div className={'emage'}>
                            <img src={el.photo} alt={'foto'} />
                        </div>

                        <div className={'photo foto'}>
                            <img src={el.imageUrl} key={el.id} alt={'foto'} />
                        </div>
                        <div className={'cd-content-tag'}>
                            <div className={'cd-content-tag_card-title'}>{el.title}</div>
                            <div className={`bottns ${colorCodes}: ${el.dcolor}`}>{el.status}</div>

                            <div className={'cd-content-tag_card-end-bottom'}>
                                <div className={'cd-content-tag_card-end-bottom_source'}>
                                    <div>
                                        <span className={'by-text'}>by</span>
                                        <span>{el.name}</span>
                                    </div>
                                    <div className={'date'}>{el.date}</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CardPreview;
