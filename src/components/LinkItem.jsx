import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
    display: flex;
    color: #FFFFFF;
    align-items: center;
    margin-bottom: 5px;

    &:visited {
        color: #FFFFFF;
    }

    @media (max-width: 1000px) {
        font-size: 30px;
        padding: 20px 0px;
    }
`;

export default function LinkItem({text, link, icon}) {
    return (
        <Container href={link}>
            <ion-icon style={{marginRight: 10}} name={icon || "chevron-forward-outline"}></ion-icon>
            {text}
        </Container>
    )
};