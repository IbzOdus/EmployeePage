import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const LoadingDiv = styled.div`
    border: 10px solid #f3f3f3;
    border-top: 10px solid ${colors.primary};
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-top: 50px;
    animation: spin 2s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`;

export default function Loader() {
    return <LoadingDiv />;
}
