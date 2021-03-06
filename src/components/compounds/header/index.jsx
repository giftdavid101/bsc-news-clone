import React, { useState } from 'react';
import './header.style.css';
import { GiHamburgerMenu, MdKeyboardArrowDown } from 'react-icons/all';
import { Link } from 'react-router-dom';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileLinks = () => setClick(true);

    return (
        <div className={'header  '}>
            <div className={'header_hc container'}>
                <div className={'header_hc_hc-content '}>
                    <div className={'header_hc_hc-content_logo'}>
                        <img
                            src={
                                'https://global-uploads.webflow.com/5fad86e1f5867747a5250efa/5fc78b9c51ddf6747725cb42_Logo-2.svg'
                            }
                            alt={'logo'}
                        />
                    </div>

                    <div className={'header_hc_hc-content_list '}>
                        <div className={'header_hc_hc-content_list_nl'}>
                            <Link to={'/'}> Opinions</Link>
                            <MdKeyboardArrowDown />
                        </div>
                        <div className={'header_hc_hc-content_list_nl'}>
                            <Link to={'/'}>Binance Smart Chain Defi</Link>
                            <MdKeyboardArrowDown />
                        </div>
                        <div className={'header_hc_hc-content_list_nl'}>
                            <Link to={'/'}> Essentials</Link>
                            <MdKeyboardArrowDown />
                        </div>
                        <div className={'header_hc_hc-content_list_nl'}>
                            <Link to={'/'}>Binance Smart Chain Tools</Link>
                            <MdKeyboardArrowDown />
                        </div>
                        <div className={'header_hc_hc-content_list_nl_pa'}>
                            <div className={'header_hc_hc-content_list_nl_pa_pa-item'}>
                                <Link to={'/'}>Podcast</Link>
                            </div>
                            <div className={'header_hc_hc-content_list_nl_pa_pa-item'}>
                                <Link to={'/'}>All Post</Link>
                            </div>
                        </div>
                    </div>

                    <div className={'header_hc_hc-content_mobile-hamburger'} onClick={handleClick}>
                        {click ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
                    </div>
                    {click ? (
                        <div className={'header_hc_hc-content_mobile-list'} onClick={closeMobileLinks}>
                            <div className={'header_hc_hc-content_mobile-list_optn'}>
                                <Link to={'/'}> Opinions</Link>
                                <MdKeyboardArrowDown />
                            </div>
                            <div className={'header_hc_hc-content_mobile-list_optn'}>
                                <Link to={'/'}>Binance Smart Chain Defi</Link>
                                <MdKeyboardArrowDown />
                            </div>
                            <div className={'header_hc_hc-content_mobile-list_optn'}>
                                <Link to={'/'}>Binance Smart Chain Tools</Link>
                                <MdKeyboardArrowDown />
                            </div>
                            <div className={'header_hc_hc-content_mobile-list_optn'}>
                                <Link to={'/'}> Podcast</Link>
                                <MdKeyboardArrowDown />
                            </div>
                            <div className={'header_hc_hc-content_mobile-list_optn'}>
                                <Link to={'/'}> All Post</Link>
                                <MdKeyboardArrowDown />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Header;
