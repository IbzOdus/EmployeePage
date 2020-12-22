import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionHeading } from '../pages/Common';
import { colors } from '../../constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function LinksSection() {
    return (
        <SectionWrapper id="links" backgroundColor={colors.user}>
            <SectionHeading color={'#FFFFFF'}>Links</SectionHeading>
            <Container>

            </Container>
        </SectionWrapper>
    )
};