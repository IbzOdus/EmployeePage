import React from 'react';
import styled from 'styled-components';
import ProfileContent from '../ProfileContent';

const Container = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default function ProfileSection() {
    return <Container id='intro'>
        <ProfileContent />
    </Container>
};