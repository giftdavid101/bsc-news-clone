import React from 'react';
import './footer.style.css';
import { AiOutlineTwitter, FiFacebook, AiFillYoutube } from 'react-icons/all';
import Links from '../../elements/linkcomponent';
import NewsLetter from '../../elements/newsletter';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={'footer '}>
            <div className={'footer_fc container'}>
                <div className={'footer_fc_top'}>
                    <div className={'footer_fc_top_f-links'}>
                        <Links />
                    </div>
                    <NewsLetter />
                </div>

                <div>
                    <div className={'media'}>
                        <div className={'media_emages'}>
                            <img
                                src={
                                    'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/5fc78b9c51ddf6747725cb42_Logo-2.svg'
                                }
                                alt={'logo'}
                            />
                        </div>
                        <div className={'icons'}>
                            <Link to={'/'}>
                                {' '}
                                <FiFacebook />
                            </Link>
                            <Link to={'/'}>
                                <AiOutlineTwitter />
                            </Link>
                            <AiFillYoutube />
                        </div>
                    </div>
                    <div className={'copy'}>
                        <span>&copy; BSC NEWS 2021 - All right reserved</span>
                        <div>
                            <Link to={'/'}>Privacy</Link>
                            <Link to={'/'}>Terms</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
