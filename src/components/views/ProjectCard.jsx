import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    height: 500px;
    width: 300px;
    padding: 20px;
    background-color: ${colors.primaryLight};
    border-radius: 15px;
`;

const Title = styled.a`
    font-size: 45px;
    font-weight: normal;

    &:visited {
        color: ${colors.primary};
    }
    
    &:hover {
        cursor: pointer;
        color: ${colors.user};
        border-color: ${colors.user};
    }
`;

const Summary = styled.span`
    padding: 10px 0px;
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 20px;
    object-fit: cover;
`;

const Points = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    padding-top: 10px;
    justify-content: space-evenly;
    font-weight: bold;
`;

export default function ProjectCard({name, summary, thumbnail, points, link}) {
    return (
        <Container>
            <Title href={link}>{name}</Title>
            <Summary>{summary}</Summary>
            <Image src={thumbnail}/>
            <Points>
                {points.map((point, index) => {
                    return <span key={index}>{`• ${point}`}</span>
                })}
            </Points>
        </Container>
    )
};