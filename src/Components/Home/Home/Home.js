import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import HomeContact from '../HomeContact/HomeContact';
import MakeParts from '../MakeParts/MakeParts';
import Products from '../Product/Products';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            <BusinessSummary></BusinessSummary>
            <MakeParts></MakeParts>
            <Reviews></Reviews>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;