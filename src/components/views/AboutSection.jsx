import React from 'react';
import styled from 'styled-components';
import { SectionWrapper, SectionHeading } from '../pages/Common';
import { ExpandLineBreakDelimiters } from '../../helpers';

const AboutContent = styled.div`
    max-width: 50ch;
    text-align: center;

    @media only screen and (min-width: 700px) {
        max-width: 70ch;
    }
`;

export default function AboutSection({ text }) {
    const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Vestibulum morbi blandit cursus risus at ultrices mi. Adipiscing at in tellus integer feugiat. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pharetra et ultrices neque ornare aenean euismod.<br /><br />Sed risus ultricies tristique nulla. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Netus et malesuada fames ac turpis egestas sed. Convallis aenean et tortor at risus viverra adipiscing at. Tincidunt arcu non sodales neque. Placerat in egestas erat imperdiet sed euismod nisi. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Turpis tincidunt id aliquet risus feugiat in ante. Commodo odio aenean sed adipiscing diam donec.<br /><br />Scelerisque fermentum dui faucibus in. Diam maecenas sed enim ut sem viverra aliquet eget sit. Nec feugiat nisl pretium fusce id. Eros donec ac odio tempor. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Quam quisque id diam vel quam. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. In pellentesque massa placerat duis ultricies lacus sed. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Donec ac odio tempor orci. Arcu odio ut sem nulla.`;

    return (
        <SectionWrapper
            id='about'
            backgroundColor={'#000000'}
            backgroundUrl={`/${'Code Background Center.png'}`}>
            <SectionHeading>About</SectionHeading>
            <AboutContent>
                {text
                    ? ExpandLineBreakDelimiters(text, '\\n')
                    : ExpandLineBreakDelimiters(dummyText, '<br />')}
            </AboutContent>
        </SectionWrapper>
    );
}
