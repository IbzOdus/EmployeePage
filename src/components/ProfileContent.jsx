import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Container = styled.div`
    max-width: 1000px;
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

const PositionText = styled.span`
    font-size: 20px;
    color: #FFFFFF;
    margin-top: 15px;
    z-index: 2;
`;

const PositionAccent = styled.div`
    position: relative;
    bottom: 50px;
    width: 100%;
    min-width: 65ch;
    height: 35px;
    display: flex;
`;

const PositionAccentColor = styled.span`
    background-color: ${colors.user};
    border-radius: 12px;
    flex: 1;
    height: 100%;
`;

const PositionAccentHider = styled.span`
    width: 100px;
    height: 100%;
`;

export default function ProfileContent() {
    return (
        <Container>
            <TextImageContainer>
                <TextContainer>
                    Hi there, I'm
                    <br/>
                    <Name>Person Name</Name>
                    <PositionText>Full-Stack Developer_</PositionText>
                </TextContainer>
                <ProfilePicture src={profilePic} />
            </TextImageContainer>
            <PositionAccent>
                <PositionAccentColor />
                <PositionAccentHider />
            </PositionAccent>
        </Container>
    )
};