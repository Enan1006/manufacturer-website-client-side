import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';

const About = () => {
    return (
        <div>
            <BusinessSummary></BusinessSummary>
            <Summary></Summary>
            <Reviews></Reviews>
        </div>
    );
};

export default About;