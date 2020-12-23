import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
    display: flex;
    color: #FFFFFF;
    align-items: center;
    margin-bottom: 0.4rem;

    &:visited {
        color: #FFFFFF;
    }

    &:hover {
        transform: scale(1.05);
    }
`;

export default function LinkItem({text, link, icon}) {
    return (
        <li>
            <Link href={link}>
                <ion-icon style={{marginRight: '0.3rem'}} name={icon || "chevron-forward-outline"} />
                {text}
            </Link>
        </li>
    )
};