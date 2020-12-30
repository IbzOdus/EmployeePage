import React from 'react';
import styled from 'styled-components';
import ProfileContent from '../ProfileContent';
import { Colors } from '../../constants';

const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function ProfileSection({ name, position, picture, color }) {
    return (
        <Container id='intro'>
            <ProfileContent
                name={name}
                position={position}
                picture={picture}
                color={color || Colors.primaryLight}
            />
        </Container>
    );
}
