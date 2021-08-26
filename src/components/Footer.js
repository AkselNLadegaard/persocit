import React from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

const FooterContainer = styled.footer`
	width: 100%;
	border-top: 0.3em solid var(--primary);
	margin: 3rem 0 0;
	.inner-container {
		width: 100%;
		margin: 0 auto;
		max-width: var(--siteWidth);
		padding: 2rem 24px;
	}
	.about {
		padding: 1em;
		border: 0.3em dashed var(--primary);
	}
`

const Footer = ({ ...props }) => {
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
		<FooterContainer {...props}>
			<div className={'inner-container'}>
				<h3>Footer</h3>
				<p>So we are going to add some base information here.</p>
				<div className={'about'}>
					<h4>{siteTitle}</h4>
					<p>{siteDescription}</p>
					<p>
						By: <b>{siteAuthor}</b>
					</p>
				</div>
			</div>
		</FooterContainer>
	)
}

export default Footer
