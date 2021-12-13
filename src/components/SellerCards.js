import React from 'react';
import styled from 'styled-components';
import data from '../data';
function SellerCards() {

    return(
        <SellerCardsStyled>
         {
        data.map((item) => {
            return <div className="SellerCards" key={item.id}>
                <div className="number">
                    <p>0 {item.id}</p>
                </div>
                <div className="profile">
                    <img src={item.image} alt="" />
                    </div>
                    <div className="text">
                    <h4>{item.name}</h4>
                   <p>{item.currency} </p>
                    </div>
            </div>
        })



         }
        </SellerCardsStyled>
    )
}

const SellerCardsStyled =styled.div`
border-radius: 20px;
background: rgba(255, 255, 255, 0.03);
width: 20rem;

transition: all .4s ease-in-out;

&:hover {
    transform: translateY(-10px);
}
.SellerCards{
    display:flex;
    align-items: center;
    padding: 1.5rem 1rem;
    
  


}
.number {
    padding-right: 1rem;
    font-size: 1.6rem;
    opacity: 0.5;
}
p{
    font-weight: 700;
    font-size: 90%;
}
.profile{
    display: flex;
    img{
        width:70px;
        height:70px;
        border-radius: 50%;
        margin-right: 1rem;
        object-fit: cover;
        border: 2px solid #fff;
    }

}

`;
export default SellerCards;