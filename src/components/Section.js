import React from 'react'
import styled from '@emotion/styled'

const SectionContainer = styled.section`
	width: 100%;
	max-width: var(--siteWidth);
	margin: 0 auto;
	padding: 0 24px;
`

const Section = ({ children, ...props }) => {
	return <SectionContainer {...props}>{children}</SectionContainer>
}

export default Section
