import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../../images/Code Background.png';
import { PageWrapper, PageHeading } from '../pages/Common';
import { colors } from '../../constants';

const InterestsSection = () => {
    return (
        <PageWrapper id="interests" color={colors.primary}>
            <PageHeading>Interests</PageHeading>
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

export default InterestsSection;