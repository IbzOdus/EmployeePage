import React from 'react';
import styled from 'styled-components';
import interestsImage from '../../images/falaq-lazuardi-2Ul7W3d5pkE-unsplash.jpg';
import { PageWrapper, PageHeading } from '../pages/Common';
import { colors } from '../../constants';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const ActionImage = styled.img`
    box-shadow: 0px 0px 30px 15px;
`; 

const InterestsText = styled.div`
    flex: 1;
    /* align-items: center */
`;

const InterestsSection = () => {
    return (
        <PageWrapper id="interests" color={colors.primary}>
            <PageHeading>Interests</PageHeading>
            <Container>
                <ActionImage src={interestsImage} />
                <InterestsText>Txt</InterestsText>
            </Container>
        </PageWrapper>
    )
};

export default InterestsSection;