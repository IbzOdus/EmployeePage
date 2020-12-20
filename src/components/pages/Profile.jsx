import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import ProfileSection from '../views/ProfileSection';
import AboutSection from '../views/AboutSection';
import SubNav from '../SubNav';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function ProfileScreen() {
    return <Container>
        <Navbar />
        <ProfileSection />
        <SubNav />
        <AboutSection />
        {/* <InterestsSection />
        <ProjectsSection />
        <ContactSection /> */}
    </Container>
};