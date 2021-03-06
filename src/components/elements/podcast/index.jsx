import React from 'react';
import './podcast.style.css';

const Podcast = () => {
    return (
        <div className={'podcast'}>
            <div className={'podcast_ptitle'}>
                <h1>PODCAST</h1>
            </div>
            <div className={'podcast_pc'}>
                <div className={'podcast_pc_p-item'}>
                    <div className={'podcast_pc_p-item_emage'}>
                        <img
                            src={
                                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60089e1707f1c5be0c4b699e_podcast%20nail.jpg'
                            }
                            alt={'foto'}
                        />
                    </div>
                    <div className={'podcast_pc_p-item_content'}>
                        <h3>Episode 21: A conversation with Unidex</h3>
                        <div className={'podcast_pc_p-item_content_podcast-text'}>
                            giving information on its origins, as well as a random Lipsum generator.
                        </div>
                    </div>
                </div>
                <div className={'podcast_pc_p-item'}>
                    <div className={'podcast_pc_p-item_emage'}>
                        <img
                            src={
                                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60089e1707f1c5be0c4b699e_podcast%20nail.jpg'
                            }
                            alt={'foto'}
                        />
                    </div>
                    <div className={'podcast_pc_p-item_content'}>
                        <h3>Episode 20: SushiSwap Coming to BSC</h3>
                        <div className={'podcast_pc_p-item_content_podcast-text'}>
                            giving information on its origins, as well as a random Lipsum generator.
                        </div>
                    </div>
                </div>
                <div className={'podcast_pc_p-item'}>
                    <div className={'podcast_pc_p-item_emage'}>
                        <img
                            src={
                                'https://global-uploads.webflow.com/5fad86e2327507cecea2d5e8/60089e1707f1c5be0c4b699e_podcast%20nail.jpg'
                            }
                            alt={'foto'}
                        />
                    </div>
                    <div className={'podcast_pc_p-item_content'}>
                        <h3>Episode 19: BNB to $200?</h3>
                        <div className={'podcast_pc_p-item_content_podcast-text'}>
                            giving information on its origins, as well as a random Lipsum generator.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Podcast;
