import React from 'react';
import styled from 'styled-components';
import { SectionStyled} from './Layouts';
import MainTitle from './MainTitle';
import GradientCard from './GradientCard';
import woman from '../img/woman.jpg';
import quartz from '../img/quartz.jpg';
import white from '../img/white.jpg';
import crystall from '../img/crystall.png';
import avatar from '../img/avatar.png';
import TheButton from './TheButton';

function GradientCardsSection() {

    return(
        <GradientCardsSectionStyled>
            <SectionStyled>

                <div className="title-con">
                    <MainTitle title={"Upcoming crystals"} subtitle={"Discover our new items"} para={"A good positive affirmation can help you combat stress and increase the neural pathways in your brain."} />

                </div>
                <div className="gradient-cards-con">
                    
                    <GradientCard image={crystall} avatar={avatar} name={'@Ipsum Lorem'} price={'$20'} title={'Luck Crystal'}/>
                    <GradientCard image={white} avatar={avatar} name={'@Ipsum Lorem'} price={'$20'} title={'Luck Crystal'}/>
                    <GradientCard image={quartz} avatar={avatar} name={'@Ipsum Lorem'} price={'$20'} title={'Luck Crystal'}/>
                    <GradientCard image={crystall} avatar={avatar} name={'@Ipsum Lorem'} price={'$20'} title={'Luck Crystal'}/>
                    <GradientCard image={quartz} avatar={avatar} name={'@Ipsum Lorem'} price={'$20'} title={'Luck Crystal'}/>
                    <GradientCard image={white} avatar={avatar} name={'@Ipsum Lorem'} price={'$20'} title={'Luck Crystal'}/>
                   
                </div>
                <div className="cta-btn">
       <TheButton name={'View More'} />
   </div>
            </SectionStyled>

        </GradientCardsSectionStyled>
    )
}

const GradientCardsSectionStyled = styled.div`
  .cta-btn{
      padding-top: 3rem;
      text-align: center;
  }
`;


export default GradientCardsSection;