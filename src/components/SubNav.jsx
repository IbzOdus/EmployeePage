import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Container = styled.nav`
    position: sticky;
    top: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0px 0px 3px;
    padding: 3px 20px 5px 20px;
    font-weight: bold;
    min-width: 300px;
    width: 40%;
    margin-bottom: 20px;
    color: ${colors.primary};
`;

const SubNavItem = styled.a`
    color: ${colors.primary};
    
    &:visited {
        color: #bdc3c7;
    }
    
    &:hover {
        color: ${colors.user};
    }
`;

const SubNav = () => {
    return <Container>
        <SubNavItem href="#about">About</SubNavItem>
        <span>|</span>
        <SubNavItem href="#interests">Interests</SubNavItem>
        <span>|</span>
        <SubNavItem href="#projects">Projects</SubNavItem>
        <span>|</span>
        <SubNavItem href="#contact">Contact</SubNavItem>
    </Container>
};

export default SubNav;