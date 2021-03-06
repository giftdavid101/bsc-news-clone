import React from 'react';
import './links.style.css';
import { fData } from '../../compounds/Footer/footerdata';
import { Link } from 'react-router-dom';
const Links = () => {
    return (
        <div className={'links'}>
            <div className={'links_lnk-options'}>
                {fData.map((el) => (
                    <div key={el.id} title={el.title}>
                        <div className={'lnktitle'}>
                            <h4>{el.title}</h4>
                        </div>

                        <div>
                            {el.optionli.map((el) => (
                                <div className={'a-tag'} key={el.idtwo} title={el.linkone}>
                                    <Link to={el.href}>{el.linkone}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Links;
