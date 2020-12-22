import React from 'react';
import styled from 'styled-components';
import interestsImage from '../../images/falaq-lazuardi-2Ul7W3d5pkE-unsplash.jpg';
import { PageWrapper, PageHeading } from '../pages/Common';
import { colors } from '../../constants';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1400px;
`;

const ActionImage = styled.img`
    box-shadow: 0px 0px 10px 5px;
    height: 700px;
`; 

const InterestsText = styled.div`
    text-align: center;
    width: 50%;
    min-width: 200px;
    padding: 20px;
`;

export default function InterestsSection() {
    return (
        <PageWrapper id="interests" color={colors.primary}>
            <PageHeading>Interests</PageHeading>
            <Container>
                <ActionImage src={interestsImage} />
                <InterestsText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </InterestsText>
            </Container>
        </PageWrapper>
    )
};