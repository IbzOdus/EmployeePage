import React from 'react';
import styled from 'styled-components';
import { PageWrapper, PageHeading } from '../pages/Common';
import { colors } from '../../constants';

export default function LinksSection() {
    return (
        <PageWrapper id="links" backgroundColor={colors.user}>
            <PageHeading color={'#FFFFFF'}>Links</PageHeading>
                <span style={{textAlign: 'center'}}>I'm Person Name<br/>a full stack developer of x years.<br/>I attended y university and graduated with<br/>some degree</span>
                <br />
                <span style={{textAlign: 'center'}}>I'm Person Name<br/>a full stack developer of x years.<br/>I attended y university and graduated with<br/>some degree</span>
                <br />
                <span style={{textAlign: 'center'}}>I'm Person Name<br/>a full stack developer of x years.<br/>I attended y university and graduated with<br/>some degree</span>
        </PageWrapper>
    )
};