import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${colors.primary};
`;

const Logo = styled.div`
    font-family: Courier New;
    color: #ffffff;
    font-size: 0.8rem;
    padding-left: 1em;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (min-width: 700px) {
        font-size: 2rem;
    }
`;

export default function Navbar() {
    return (
        <Nav>
            <Logo>Company Name</Logo>
        </Nav>
    );
}
