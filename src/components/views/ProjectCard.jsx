import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';

const Container = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 0.5rem;
    font-weight: bold;
    height: 15rem;
    max-width: 10rem;
    padding: 0.8em;
    margin: 0rem 1rem;
    background-color: ${colors.primaryLight};
    border-radius: 0.6rem;

    &:hover {
        transform: scale(1.05);
        cursor: pointer;
        border: 0.3em solid ${props => props.color};
    }
`;

const Title = styled.a`
    font-size: 1.1rem;
    font-weight: normal;

    &:visited {
        color: ${colors.primary};
    }
    
    &:hover {
        color: ${props => props.color};
    }
`;

const Summary = styled.span`
    padding: 0.3em 0em;
`;

const Image = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 1.2rem;
    object-fit: cover;
`;

const Points = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding-top: 0.3em;
    justify-content: space-around;
    font-weight: bold;
    padding-bottom: 1.5em;
`;

const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.55rem;
    font-weight: bold;
    color: ${colors.primary};
    background-color: transparent;
    border: 0.3em solid ${colors.primary};
    border-right: none;
    border-bottom: none;
    padding: 0.3em 1.2em;
    border-top-left-radius: 0.6rem;
`;

export default function ProjectCard({name, summary, thumbnail, points, link, color}) {
    return (
        <Container color={color}>
            <Title color={color} href={link}>{name}</Title>
            <Summary>{summary}</Summary>
            <Image src={thumbnail}/>
            <Points>
                {points.map((point, index) => {
                    return <span key={index}>{`• ${point}`}</span>
                })}
            </Points>
            <Button>View</Button>
        </Container>
    )
};