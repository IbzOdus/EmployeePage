import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from '../../constants';

const Container = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 0.6rem;
    font-weight: bold;
    height: 15rem;
    max-height: 95vh;
    max-width: 10rem;
    padding: 0.8em;
    margin: 0rem 1rem;
    background-color: ${Colors.primaryLight};
    border-radius: 0.6rem;
    box-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.4);

    ${props =>
        props.clickable &&
        css`
            &:hover {
                transform: scale(1.05);
                cursor: pointer;
                border: 0.2em solid ${props => props.color};
            }
        `};

    @media only screen and (min-width: 700px) {
        height: 30rem;
        font-size: 1.2rem;
        font-weight: normal;
        max-width: 18rem;
    }
`;

const Title = styled.span`
    font-size: 1.1rem;
    font-weight: normal;

    &:hover {
        color: ${props => props.color};
    }

    @media only screen and (min-width: 700px) {
        font-size: 2rem;
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

    @media only screen and (min-width: 700px) {
        width: 7rem;
        height: 7rem;
    }
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

    @media only screen and (min-width: 700px) {
        font-weight: normal;
    }
`;

const Button = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 0.55rem;
    font-weight: bold;
    color: inherit;
    background-color: inherit;
    border: 0.2em solid ${Colors.primaryDark};
    border-right: none;
    border-bottom: none;
    padding: 0.3em 1.2em;
    border-top-left-radius: 0.6rem;
    border-bottom-right-radius: 0.6rem;

    &:hover {
        color: ${props => props.color};
        border-color: ${props => props.color};
    }

    @media only screen and (min-width: 700px) {
        font-size: 1rem;
        font-weight: normal;
    }
`;

export default function ProjectCard({
    name,
    summary,
    thumbnail,
    points,
    link,
    color,
}) {
    return (
        <Container
            color={color}
            clickable={link !== undefined}
            onClick={() => /* navigate to project page */ {}}>
            <Title color={color}>{name}</Title>
            <Summary>{summary}</Summary>
            <Image src={thumbnail} />
            <Points>
                {points.map((point, index) => {
                    return <span key={index}>{`• ${point}`}</span>;
                })}
            </Points>
            {link && <Button color={color}>View</Button>}
        </Container>
    );
}
