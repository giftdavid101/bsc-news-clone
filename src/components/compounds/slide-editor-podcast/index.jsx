import React from 'react';
import Slider from '../../elements/slider';
import Editors from '../../elements/editors';
import Podcast from '../../elements/podcast';
import './sep.style.css';

const SlideEditorPodcast = () => {
    return (
        <div className={'s-e-p container'}>
            <div className={'s-e-p_se'}>
                <div className={'s-e-p_se_se-contnt'}>
                    <Slider />
                    <Editors />
                </div>
            </div>
            <Podcast />
        </div>
    );
};

export default SlideEditorPodcast;
