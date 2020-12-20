import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';

const Container = styled.div`
    flex-direction: row;
    flex: 1;
`;

export default function ProfileScreen() {
    return <Container>
        <Navbar />
        {/* <ProfileSection />
        <AboutSection />
        <InterestsSection />
        <ProjectsSection />
        <ContactSection /> */}
    </Container>
};