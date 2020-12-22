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
`;

export default function LinkItem({text, link, icon}) {
    return (
        <Container href={link}>
            <ion-icon style={{marginRight: 10}} name={icon}></ion-icon>
            {text}
        </Container>
    )
}