import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionHeading } from '../pages/Common';
import { colors } from '../../constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 600px) {
        flex-direction: row;
    }
`;

const ActionImage = styled.img`
    box-shadow: 0 0 0.5rem 0.2rem;
    max-height: 20rem;
    max-width: 15rem;

    @media only screen and (min-width: 600px) {
        max-height: 40rem;
        max-width: 35rem;
    }
`; 

const InterestsText = styled.div`
    text-align: center;
    width: 50ch;
    padding: 1.5em;
    padding-bottom: 0;

    @media only screen and (min-width: 600px) {
        padding: 2em;
    }
`;

export default function InterestsSection({ picture, text }) {
    return (
        <SectionWrapper id="interests" color={colors.primary}>
            <SectionHeading>Interests</SectionHeading>
            <Container>
                <ActionImage src={`./${picture}`} />
                <InterestsText>
                    {text || `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
                </InterestsText>
            </Container>
        </SectionWrapper>
    )
};