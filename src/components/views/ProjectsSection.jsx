import React from 'react';
import styled from 'styled-components';
import { PageWrapper, PageHeading } from '../pages/Common';
import { colors } from '../../constants';
import ProjectCard from './ProjectCard';
import projectThumbnail from '../../images/app-icon-3364869_1280.png';

const Container = styled.div`
    display: flex;
`;

export default function ProjectsSection() {
    return (
        <PageWrapper id="projects" backgroundColor={colors.primary} color={colors.primary}>
            <PageHeading color={'#FFFFFF'}>Projects</PageHeading>
            <Container>
                <ProjectCard
                    name={'Project Name Name'}
                    summary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                    thumbnail={projectThumbnail}
                    points={["Cross-Platform application", "Has feature X", "Y million downloads", "Z thousand active users"]}/>
            </Container>
        </PageWrapper>
    )
};