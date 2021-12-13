import React from 'react';
import styled from 'styled-components';

function TheButton({name}) {
    return(
        <TheButtonStyled>
            {name}
        </TheButtonStyled>
    )
}

const TheButtonStyled = styled.a`
text-transform: uppercase;
display: inline-block;
padding: 0.9rem 1.5rem;
border-radius: 8px;
font-size: 1.1rem;
font-weight: 500;
cursor: pointer;
transition: all .4s ease-in-out;
background: linear-gradient(130deg, #395FF6, #EB3FA9);


&:hover{
    transition: all .4s ease-in-out;
    background: linear-gradient(120deg, #EB3FA9, #305FF6);
}

`;

export default TheButton;