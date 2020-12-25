import styled, { css } from 'styled-components';

export const SectionWrapper = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    font-family: 'Agency FB', 'Roboto';
    text-align: center;
    font-size: 0.8rem;
    align-items: center;
    padding: 1.2em;
    color: ${props => props.color || '#FFFFFF'};
    background-color: ${props => props.backgroundColor || '#FFFFFF'};

    ${props => props.backgroundUrl && css`
        background-image: url("${props.backgroundUrl}");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    `};

    @media only screen and (min-width: 700px) {
        font-size: 1.5rem;
        padding: 2em;
    }
`;

export const SectionHeading = styled.h1`
    font-size: 1rem;
    color: ${props => props.color || undefined};
    margin-bottom: 1em;

    @media only screen and (min-width: 700px) {
        font-size: 3rem;
    }
`;