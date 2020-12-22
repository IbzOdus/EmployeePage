import React from 'react';
import styled from 'styled-components';
import ProfileSection from '../views/ProfileSection';
import SubNav from '../SubNav';
import AboutSection from '../views/AboutSection';
import InterestsSection from '../views/InterestsSection';
import ProjectsSection from '../views/ProjectsSection';
import LinksSection from '../views/LinksSection';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function ProfilePage() {
    return (
        <Container>
            <ProfileSection />
            <SubNav />
            <AboutSection />
            <InterestsSection />
            <ProjectsSection />
            <LinksSection />
        </Container>
    )
};