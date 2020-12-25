import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants';

const Container = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    align-self: start;
    bottom: 1rem;
    left: 1rem;
    width: ${props => props.open ? "calc(100% - 2rem)" : "2rem"};
    height: 2rem;
    border-radius: 1.5rem;
    background-color: ${colors.primary};
    mix-blend-mode: luminosity;
    border: 0.1rem solid white;
    color: white;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    transition: all ease-in-out 200ms;
    z-index: 5;
    opacity: ${props => !props.open && 0.3};

    &:hover {
        opacity: 1;
    }

    @media only screen and (min-width: 700px) {
        position: sticky;
        top: 1rem;
        left: 3rem;
        width: ${props => props.open ? "calc(100% - 6rem)" : "2rem"};
        margin-top: -2rem;
    }
`;

const SubNavItemsContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    mix-blend-mode: none;
    font-weight: bold;
    font-size: 0.8rem;

    @media only screen and (min-width: 700px) {
        font-size: 1.2rem;
    }
`;

const SubNavItem = styled.a`
    color: #FFFFFF;

    &:visited {
        color: #FFFFFF;
    }
    
    &:hover {
        transform: scale(1.05);
    }
`;

const NavIconContainer = styled.span`
    width: 1.8rem;
    height: 1.8rem;

    &:hover {
        cursor: pointer;
    }
`;

export default function SubNav() {
    const [open, setOpen] = useState(false);
    return (
        <Container open={open}>
            <NavIconContainer>
                <ion-icon
                    style={{width: "100%", height:"100%", transform: open && "rotate(90deg)", transition: "all ease-in-out 200ms"}}
                    name="menu-outline"
                    onClick={() => setOpen(open => !open)}
                />
            </NavIconContainer>
            {open && 
                <SubNavItemsContainer>
                    <SubNavItem href="#about">About</SubNavItem>
                    <span>|</span>
                    <SubNavItem href="#interests">Interests</SubNavItem>
                    <span>|</span>
                    <SubNavItem href="#projects">Projects</SubNavItem>
                    <span>|</span>
                    <SubNavItem href="#links">Links</SubNavItem>
                </SubNavItemsContainer>
            }
        </Container>
    )
};