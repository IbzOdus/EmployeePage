import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileSection from '../views/ProfileSection';
import SubNav from '../SubNav';
import AboutSection from '../views/AboutSection';
import InterestsSection from '../views/InterestsSection';
import ProjectsSection from '../views/ProjectsSection';
import LinksSection from '../views/LinksSection';
import { defaultUser } from '../../constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function ProfilePage() {
    /**
     * If you have multiple users, you would probably want to retrieve the user id from
     * maybe the search params of the page, then use that to fetch the necessary user data
     * from a database.
     * 
     * I'm just going to use a static user for this example. If fetching, you could use an additional
     * state variable called loading. When loading, show a loading spinner to the user. When the
     * user data is retrieved, set loading to false and display the contents of the page populated
     * with the user data. If there was some sort of issue retrieving the data, return the appropriate
     * response (400, 404 etc)
     */
    const [user, ] = useState(defaultUser);

    return (
        <Container>
            <ProfileSection name={user.name} position={user.position} picture={user.image} color={user.color}/>
            <SubNav />
            <AboutSection text={user.aboutText}/>
            <InterestsSection picture={user.interests.imgName} text={user.interests.interestsText} />
            <ProjectsSection projects={user.projects} color={user.color}/>
            <LinksSection links={user.links} color={user.color}/>
        </Container>
    )
};