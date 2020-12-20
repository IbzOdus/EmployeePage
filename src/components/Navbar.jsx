import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${colors.primary}
`;

const Logo = styled.div`
    font-family: Courier New;
    color: #FFFFFF;
    font-size: 40px;
    margin-left: 40px;

    &:hover {
        cursor: pointer;
    }
`;

export default function Navbar() {
    return <Nav>
        <Logo>Company Name</Logo>
    </Nav>
};