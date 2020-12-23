import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionHeading } from '../pages/Common';
import LinkItem from '../LinkItem';
import { colors } from '../../constants';

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
`;

const iconTypeMap = {
    website: "globe-outline",
    email: "mail-outline",
    github: "logo-github",
    linkedin: "logo-linkedin",
    youtube: "logo-youtube",
    phone: "keypad-outline",
};

export default function LinksSection({ links, color }) {
    return (
        <SectionWrapper id="links" backgroundColor={color || colors.primaryLight}>
            <SectionHeading color={'#FFFFFF'}>Links</SectionHeading>
            <Container>
                {links.map((link, index) => {
                    const lowerCaseType = link.type.toLowerCase();
                    let prepend = '';
                    if (lowerCaseType === "email") {
                        prepend = "mailto:";
                    }

                    if (lowerCaseType === "phone") {
                        prepend = "tel:"
                    }

                    return <LinkItem
                                key={index}
                                text={link.type}
                                link={`${prepend}${link.value}`}
                                icon={iconTypeMap[lowerCaseType]} />
                })}
            </Container>
        </SectionWrapper>
    )
};