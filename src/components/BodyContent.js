import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from './Layouts.js';
import MainTitle from './MainTitle.js';
import SellerCards from './SellerCards.js';
import BlogSection from './BlogSection.js';
import GradientCardsSection from './GradientCardsSection.js';
import ContactSection from './ContactSection.js';

function BodyContent() {

    return(
        <BodyContentStyled>
        <InnerLayout>
          
          
          <MainTitle title={"Best Crystals To Use"} subtitle={"Manifest your dreams"} />
        
          <div className="sellercards">
              <SellerCards />
              <SellerCards />
              <SellerCards />
          </div>
          <BlogSection />
          <GradientCardsSection />
         
            </InnerLayout>
            <ContactSection />
            <footer>
                <p>Copyright ©Adina Martiniuc. All Rights Reserved.</p>
            </footer>
            </BodyContentStyled>
    )
}
const BodyContentStyled = styled.div`
.sellercards{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 3rem -5%;
    
}
footer{
    display: flex;
    alig-items:center;
    justify-content:center;
    padding:3rem 0;
    p{
        opacity: 0.7;
        text-align: center;
    }
}
`;

export default BodyContent;