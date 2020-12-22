import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionHeading } from '../pages/Common';
import { colors } from '../../constants';
import ProjectCard from './ProjectCard';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const CardsContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
`;

const NavArrow = styled.span`
    color: ${colors.primaryLight};
    font-size: 200px;
    visibility: ${props => props.atBoundary && 'hidden'};

    &:hover {
        cursor: pointer;
        color: ${props => props.color};
    }
`;

const NavIndicator = styled.div`
    display: flex;
    justify-content: space-around;
    width: 10%;
    min-width: 50px;
    margin-top: 30px;
`;

const NavIndicatorPoint = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => (props.active && props.color) || '#FFFFFF'};
`;

const determineDisplayCount = windowWidth => {
    if (windowWidth > 1800) {
        return 5;
    } else if (windowWidth > 1550) {
        return 4;
    } else if (windowWidth > 1250) {
        return 3;
    } else if (windowWidth > 800) {
        return 2;
    } else {
        return 1;
    }
}

export default function ProjectsSection({ projects, color }) {
    const projectCount = projects.length;
    const [startIndex, setStartIndex] = useState(0);
    const [displayCount, setDisplayCount] = useState(determineDisplayCount(window.innerWidth));
    const [projectsOnDisplay, setProjectsOnDisplay] = useState([]);

    useEffect(() => {
        const updateDisplayCount = () => {
            setDisplayCount(determineDisplayCount(window.innerWidth));
            console.log(window.innerWidth);
        }
        window.addEventListener('resize', updateDisplayCount);
        return () => window.removeEventListener('resize', updateDisplayCount);
    }, []);

    useEffect(() => {
        let projectsToDisplay = [];
        for (let i = startIndex; i < startIndex + displayCount; i++) {
            projectsToDisplay.push(projects[i]);
        }

        setProjectsOnDisplay(projectsToDisplay);
    }, [projects, startIndex, displayCount])

    return (
        <SectionWrapper id="projects" backgroundColor={colors.primary} color={colors.primary}>
            <SectionHeading color={'#FFFFFF'}>Projects</SectionHeading>
            <Container>
                <NavArrow color={color} atBoundary={startIndex === 0} onClick={() => setStartIndex(index => index - 1)}>{'<'}</NavArrow>
                <CardsContainer>
                    {projectsOnDisplay.map((project, index) => <ProjectCard key={index} name={project.name} summary={project.summary} thumbnail={project.thumbnailName} points={project.points} color={color} />)}
                </CardsContainer>
                <NavArrow color={color} atBoundary={startIndex + displayCount >= projectCount} onClick={() => setStartIndex(index => index + 1)}>{'>'}</NavArrow>
            </Container>
            <NavIndicator>
                {projects.map((x, i) => <NavIndicatorPoint key={i} active={i >= startIndex && i <= (startIndex + displayCount) - 1} color={color}/>)}
            </NavIndicator>
        </SectionWrapper>
    )
};