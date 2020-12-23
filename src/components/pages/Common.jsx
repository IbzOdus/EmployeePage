import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    font-family: 'Agency FB', 'Roboto';
    text-align: center;
    font-size: 30px;
    align-items: center;
    padding: 70px;
    color: ${props => props.color || '#FFFFFF'};
    background-color: ${props => props.backgroundColor || '#FFFFFF'};

    ${props => props.backgroundUrl && css`
        background-image: url("${props.backgroundUrl}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
    `};
`;

export const SectionHeading = styled.h1`
    font-size: 70px;
    color: ${props => props.color || undefined};
    margin-bottom: 70px;
`;