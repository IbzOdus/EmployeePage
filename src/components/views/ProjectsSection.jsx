import React from 'react';
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

    &:hover {
        cursor: pointer;
        color: ${colors.user};
    }
`;

const NavIndicator = styled.div`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin-top: 30px;
`;

const NavIndicatorPoint = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => (props.active && colors.user) || '#FFFFFF'};
`;

export default function ProjectsSection() {
    return (
        <SectionWrapper id="projects" backgroundColor={colors.primary} color={colors.primary}>
            <SectionHeading color={'#FFFFFF'}>Projects</SectionHeading>
            <Container>
                <NavArrow>{'<'}</NavArrow>
                <CardsContainer>  
                    <ProjectCard
                        name={'Project Name Name'}
                        summary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                        thumbnail={projectThumbnail}
                        points={["Cross-Platform application", "Has feature X", "Y million downloads", "Z thousand active users"]}/>
                    <ProjectCard
                        name={'Project Name Name'}
                        summary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                        thumbnail={projectThumbnail}
                        points={["Cross-Platform application", "Has feature X", "Y million downloads", "Z thousand active users"]}/>
                    <ProjectCard
                        name={'Project Name Name'}
                        summary={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
                        thumbnail={projectThumbnail}
                        points={["Cross-Platform application", "Has feature X", "Y million downloads", "Z thousand active users"]}/>
                </CardsContainer>
                <NavArrow>{'>'}</NavArrow>
            </Container>
            <NavIndicator>
                <NavIndicatorPoint active/>
                <NavIndicatorPoint active />
                <NavIndicatorPoint active />
                <NavIndicatorPoint />
            </NavIndicator>
        </SectionWrapper>
    )
};