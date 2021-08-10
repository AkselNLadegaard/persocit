import React from 'react';
import styled from '@emotion/styled'
import * as constant from '../abstracts/constants'

const SectionContainer = styled.section`
  width: 100%;
  max-width: ${constant.siteWidth};
`
const Section = ({children, ...props}) => {
    return (
        <SectionContainer {...props}>
            {children}
        </SectionContainer>
    );
};


export default Section;
