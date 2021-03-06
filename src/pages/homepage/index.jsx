import React from 'react';
import SlideEditorPodcast from '../../components/compounds/slide-editor-podcast';
import CardBoard from '../../components/compounds/cardboard';
import CryptonomyDevi from '../../components/compounds/cryptonomics-devi';
import CardPreview from '../../components/compounds/cardpreview';
import Footer from '../../components/compounds/Footer';
import FourthSection from '../../components/compounds/fourthsection';

const HomePage = () => {
    return (
        <div className={'homepage container'}>
            <SlideEditorPodcast />
            <CardBoard />
            <CryptonomyDevi />
            <CardPreview />
            <FourthSection />
            <Footer />
        </div>
    );
};

export default HomePage;
