import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 50px;
    text-align: center;
`;

export default function NotFoundPage() {
    return (
        <Container>
            Sorry, We couldn't find the page you were looking for
        </Container>
    );
}
