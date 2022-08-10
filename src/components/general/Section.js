import React  from 'react'
import styled from '@emotion/styled'

const SectionContainer = styled.section`
  .section-inner {
    width: 100%;
    margin: 0 auto var(--gap);
    padding: var(--sectionPadding) var(--siteGap);
    max-width: var(--siteWidth);
  }
`

const Section = ({children, bgColor, theme, ...props}) => {
    return (
        <SectionContainer {...props}>
            <div className='section-inner'>{children}</div>
        </SectionContainer>
    )
}

export default Section
