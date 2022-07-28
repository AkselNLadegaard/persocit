import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

const FooterContainer = styled.footer`
	&.footerContainer {
		width: 100%;
		border-top: 0.3em solid var(--primary);
		background: var(--background);
		color: var(--backgroundText);
		margin: 3rem 0 0;
	}

	.inner-container {
		width: 100%;
		margin: 0 auto;
		max-width: var(--siteWidth);
		padding: 2rem 24px;
	}
`

const Footer = ({ theme, ...props }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					author
				}
			}
		}
	`)

	const siteTitle = data.site.siteMetadata.title
	const siteDescription = data.site.siteMetadata.description
	const siteAuthor = data.site.siteMetadata.author

	return (
		<FooterContainer
			{...props}
			className={`set-${theme}-alt footerContainer`}
		>
			<div className={` inner-container`}>
				<div className={'about'}>
					<h4>{siteTitle}</h4>
					<p>{siteDescription}</p>
					<p>By: {siteAuthor}</p>
				</div>
			</div>
		</FooterContainer>
	)
}

export default Footer
