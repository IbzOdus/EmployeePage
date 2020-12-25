import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionHeading } from '../pages/Common';
import { colors } from '../../constants';
import ProjectCard from './ProjectCard';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CardsContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    margin: 0rem 1rem;
`;

const NavArrow = styled.span`
    color: ${colors.primaryLight};
    font-size: 3rem;
    visibility: ${props => props.atBoundary && 'hidden'};

    &:hover {
        cursor: pointer;
        color: ${props => props.color};
        transform: scale(1.1);
    }
`;

const NavIndicator = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20%;
    min-width: 4rem;
    margin-top: 1rem;
`;

const NavIndicatorPoint = styled.span`
    width: 0.5rem;
    height: 0.5rem;
    margin: 0.1rem;
    border-radius: 50%;
    background-color: ${props => (props.active && props.color) || '#FFFFFF'};
`;

const determineDisplayCount = windowWidth => {
    if (windowWidth > 1900) {
        return 5;
    } else if (windowWidth > 1550) {
        return 4;
    } else if (windowWidth > 1250) {
        return 3;
    } else if (windowWidth > 600) {
        return 2;
    } else {
        return 1;
    }
};

export default function ProjectsSection({ projects, color }) {
    const projectCount = projects.length;
    const [startIndex, setStartIndex] = useState(0);
    const [displayCount, setDisplayCount] = useState(
        determineDisplayCount(window.innerWidth)
    );
    const [projectsOnDisplay, setProjectsOnDisplay] = useState([]);

    useEffect(() => {
        const updateDisplayCount = () => {
            setStartIndex(0);
            setDisplayCount(determineDisplayCount(window.innerWidth));
        };

        window.addEventListener('resize', updateDisplayCount);
        return () => window.removeEventListener('resize', updateDisplayCount);
    }, []);

    useEffect(() => {
        let projectsToDisplay = [];
        for (let i = startIndex; i < startIndex + displayCount; i++) {
            projectsToDisplay.push(projects[i]);
        }

        setProjectsOnDisplay(projectsToDisplay);
    }, [projects, startIndex, displayCount]);

    return (
        <SectionWrapper
            id='projects'
            backgroundColor={colors.primary}
            color={colors.primary}>
            <SectionHeading color={'#FFFFFF'}>Projects</SectionHeading>
            <Container>
                <NavArrow
                    color={color || '#FFFFFF'}
                    atBoundary={startIndex === 0}
                    onClick={() => setStartIndex(index => index - 1)}>
                    <ion-icon name='chevron-back-outline' />
                </NavArrow>
                <CardsContainer>
                    {projectsOnDisplay.map((project, index) => (
                        <ProjectCard
                            key={startIndex + index}
                            name={project.name}
                            summary={project.summary}
                            thumbnail={project.thumbnailName}
                            points={project.points}
                            color={color}
                        />
                    ))}
                </CardsContainer>
                <NavArrow
                    color={color || '#FFFFFF'}
                    atBoundary={startIndex + displayCount >= projectCount}
                    onClick={() => setStartIndex(index => index + 1)}>
                    <ion-icon name='chevron-forward-outline' />
                </NavArrow>
            </Container>
            <NavIndicator>
                {projects.map((x, i) => (
                    <NavIndicatorPoint
                        key={i}
                        active={
                            i >= startIndex &&
                            i <= startIndex + displayCount - 1
                        }
                        color={color || colors.primaryLight}
                    />
                ))}
            </NavIndicator>
        </SectionWrapper>
    );
}
