import React from 'react';
import styled from 'styled-components';
import production from '../img/production.mp4';
import {InnerLayout} from './Layouts.js';
import MainContent from './MainContent';

function MainArea() {

    return (
        <MainAreaStyled>
         <video src={production} muted playsInline autoPlay loop> </video>


    <InnerLayout>
<MainContent />

    </InnerLayout>
       
        </MainAreaStyled>
    )
}
const MainAreaStyled = styled.div`
width: 100%;
height: 100vh;
position:relative;


video{
    width: 100%;
    height:100%;
    object-fit: cover;
    opacity: 0.9;
}
`;

export default MainArea;