import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../images/Code Background Center.png';
import { PageWrapper, PageHeading } from '../pages/Common';

const AboutSection = () => {
    return (
        <PageWrapper id="about" backgroundColor={'#000000'} backgroundUrl={backgroundImage}>
            <PageHeading>About</PageHeading>
                <br />
                <br />
                <span style={{fontSize: '40px', textAlign: 'center'}}>I'm Person Name<br/>a full stack developer of x years.<br/>I attended y university and graduated with<br/>some degree</span>
                <br />
                <span style={{fontSize: '40px', textAlign: 'center'}}>I'm Person Name<br/>a full stack developer of x years.<br/>I attended y university and graduated with<br/>some degree</span>
                <br />
                <span style={{fontSize: '40px', textAlign: 'center'}}>I'm Person Name<br/>a full stack developer of x years.<br/>I attended y university and graduated with<br/>some degree</span>
        </PageWrapper>
    )
};

export default AboutSection;