import React from 'react';
import styled from 'styled-components';
import { PageWrapper, PageHeading } from '../pages/Common';
import { colors } from '../../constants';

const LinksSection = () => {
    return (
        <PageWrapper id="links" backgroundColor={colors.user}>
            <PageHeading color={'#FFFFFF'}>Links</PageHeading>
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

export default LinksSection;