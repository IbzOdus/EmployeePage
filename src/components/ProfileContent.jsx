import React from 'react';
import styled from 'styled-components';
import profilePic from '../images/pexels-pixabay-35183.jpg'
import { colors } from '../constants';

const Container = styled.div`
    min-width: 600px;
    width: 1000px;
    padding-top: 20px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextImageContainer = styled.div`
    display: flex;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    font-family: 'Courier New';
    font-size: 30px;
    font-weight: bold;
    color: ${colors.primary};
    margin-top: 10px;
    margin-right: 20px;
`;

const Name = styled.span`
    font-family: 'Agency FB', 'Roboto';
    font-size: 80px;
    color: ${colors.user};
`;

const ProfilePicture = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 10px;
    object-fit: cover;
    z-index: 1;
`;

const Position = styled.h3`
    position: relative;
    padding: 5px 0px;
    padding-left: 3ch;
    bottom: 45px;
    width: 40ch;
    font-size: 20px;
    font-family: 'Courier New';
    background-color: ${colors.user};
    border-radius: 5px;
`;

const PositionText = styled.span`
    color: #FFFFFF;
`;

export default function ProfileContent() {
    return (
        <Container>
            <TextImageContainer>
                <TextContainer>
                    Hi there, I'm
                    <br/>
                    <Name>Person Name</Name>
                </TextContainer>
                <ProfilePicture src={profilePic} />
            </TextImageContainer>
                <Position>
                    <PositionText>Full-Stack Developer</PositionText>
                </Position>
        </Container>
    )
};