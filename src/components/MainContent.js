import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import SmallHeading from './SmallHeading';
import blockchain from '../img/bchain.png';
import TheButton from './TheButton';

function MainContent() {

    return(
        <MainContentStyled>
<Navigation />
<div className="content">
<div className="left">
<SmallHeading title={'You are the creator of your own reality'} identifier={'Before'}/>
<h1> The practice of thinking <span className="GradientText"> aspirational thoughts</span> with the purpose of making them real</h1>

<p>
In a moment where all any average citizen can really do, ultimately, is hope for a better future than the one we’re all currently living in, it’s no wonder the practice of manifesting has exploded.

</p>
<div className="btns-con">
    <TheButton name={'discover more'}/>
</div>
</div>
<div className="right">
<img src={blockchain} alt="" />
</div>


</div>
        </MainContentStyled>
    )
}

const MainContentStyled = styled.div`
position: absolute;
top: 0;
left: 50%;
width:  90%;
height: 100%;
transform: translateX(-50%);
.content{
    display: grid;
    grid-template-columns:repeat(2, 1fr);
    height: 100%;
    width: 100%;
    margin-top: -3%;

    .btns-con{
        margin-top: 2rem;
    }
    .left {
        
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 130%;
        h1{
            padding: 2rem 0;
        }
    }

    .right{
        img{
            position: absolute;
            right: 5%;
            bottom: 15%;
            width: 25%;
        }
    }
}
`;

export default MainContent;