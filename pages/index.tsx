import './main.less';
import React from 'react';
import GlobalHead from '../components/common/global-head';
import Header from '../components/common/header';

const Home: React.FunctionComponent = () => {
    return (
        <div>
            <GlobalHead title='GreggW Home Page' />
            <Header />
            <h1>Gregg and Cecelia dot com</h1>
            <img height='500px' width='auto' src = '/static/invite.jpg' />      
        </div>
    )
}

export default Home;
