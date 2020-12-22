import styled, { css } from 'styled-components';

export const PageWrapper = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    font-family: 'Agency FB', 'Roboto';
    align-items: center;
    padding: 40px;
    color: ${props => props.color || '#FFFFFF'};
    background-color: ${props => props.backgroundColor || '#FFFFFF'};

    ${props => props.backgroundUrl && css`
        background-image: url("${props.backgroundUrl}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    `};
`;

export const PageHeading = styled.h1`
    font-size: 70px;
    color: ${props => props.color || undefined}
`;