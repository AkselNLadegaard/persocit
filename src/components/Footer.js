import React from 'react';
import styled from '@emotion/styled'
import * as constant from '../abstracts/constants'

const FooterContainer = styled.footer`
  width: 100%;

  .inner-container {
    width: 100%;
    margin: 0 auto;
    max-width: ${constant.siteWidth};
    padding: 4rem 32px;
  }
`

const Footer = ({...props}) => {
    return (
        <FooterContainer {...props}>
            <div className={'inner-container'}>
                <h3>Footer</h3>
                <p>So we are going to add some base information here.</p>
            </div>
        </FooterContainer>
    );
};

export default Footer;
