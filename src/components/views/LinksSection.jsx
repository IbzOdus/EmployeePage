import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionHeading } from '../pages/Common';
import { colors } from '../../constants';
import LinkItem from '../LinkItem';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function LinksSection() {
    return (
        <SectionWrapper id="links" backgroundColor={colors.user}>
            <SectionHeading color={'#FFFFFF'}>Links</SectionHeading>
            <Container>
                <LinkItem text="Website" link="#links" icon="globe-outline" />
                <LinkItem text="Email" link="mailto:person.name@email.com" icon="mail-outline" />
                <LinkItem text="GitHub" link="https://github.com/" icon="logo-github" />
                <LinkItem text="LinkedIn" link="https://linkedin.com/" icon="logo-linkedin" />
                <LinkItem text="YouTube" link="https://youtube.com/" icon="logo-youtube" />
            </Container>
        </SectionWrapper>
    )
};