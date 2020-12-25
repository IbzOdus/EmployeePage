import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Container = styled.div`
    position: relative;
    max-width: 63rem;
    padding: 1.5rem 0;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 700px) {
        padding: 0.6rem 0;
    }
`;

const TextImageContainer = styled.div`
    display: flex;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    font-family: 'Courier New';
    font-size: 1rem;
    font-weight: bold;
    color: ${colors.primary};
    margin-right: 1rem;

    @media only screen and (max-width: 700px) {
        font-size: 0.7rem;
        margin-right: 0.5rem;
    }
`;

const Name = styled.span`
    font-family: 'Agency FB', 'Roboto';
    font-size: 3.8rem;
    color: ${props => props.color || colors.primary};

    @media only screen and (max-width: 700px) {
        font-size: 1.8rem;
    }
`;

const ProfilePicture = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    box-shadow: 0 0 0.5rem;
    object-fit: cover;
    z-index: 1;

    @media only screen and (max-width: 700px) {
        height: 7rem;
        width: 7rem;
    }
`;

const PositionText = styled.span`
    color: #ffffff;
    margin-top: 1rem;
    z-index: 2;

    @media only screen and (max-width: 700px) {
        margin-top: 0.4rem;
    }
`;

const PositionAccent = styled.div`
    position: absolute;
    bottom: 3.1rem;
    width: 100%;
    height: 2.1rem;
    display: flex;

    @media only screen and (max-width: 700px) {
        height: 1.1rem;
        bottom: 1.8rem;
    }
`;

const PositionAccentColor = styled.span`
    background-color: ${props => props.color || colors.primary};
    border-radius: 0.5rem;
    flex: 1;
    height: 100%;

    @media only screen and (max-width: 700px) {
        border-radius: 0.3rem;
    }
`;

const PositionAccentHider = styled.span`
    width: 6rem;
    height: 100%;

    @media only screen and (max-width: 700px) {
        width: 3.5rem;
    }
`;

export default function ProfileContent({ name, position, picture, color }) {
    return (
        <Container>
            <TextImageContainer>
                <TextContainer>
                    <span>Hi there, I'm</span>
                    <Name color={color}>{name}</Name>
                    <PositionText>{`${position}_`}</PositionText>
                </TextContainer>
                <ProfilePicture src={`/${picture}`} />
            </TextImageContainer>
            <PositionAccent>
                <PositionAccentColor color={color} />
                <PositionAccentHider />
            </PositionAccent>
        </Container>
    );
}
