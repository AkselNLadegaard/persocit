import React from 'react'
import styled from '@emotion/styled'

const SectionContainer = styled.section`
	.sectionInner {
		width: 100%;
		margin: 0 auto;
		padding: 0 24px;
		max-width: var(--siteWidth);
	}
`

const Section = ({ children, bgColor, theme, ...props }) => {
	return (
		<SectionContainer bgColor={bgColor} {...props}>
			<div className='sectionInner'>{children}</div>
		</SectionContainer>
	)
}

export default Section
