import * as React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Hero = styled.div`
	width: 100%;

	.cardsContainer {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20ch, 1fr));
		grid-auto-rows: minmax(20ch, auto);
		grid-gap: var(--gap);

		> a {
			--borderWidth: 0.2em;
			font-size: 1.5rem;
			border: var(--primary) dashed var(--borderWidth);

			:hover,
			:focus,
			:active {
				border: solid var(--borderWidth);
			}

			div {
				display: flex;
				align-items: center;
				text-align: center;
				aspect-ratio: 1 / 1;
				padding: var(--gap);
			}
		}
	}
`

const IndexPage = () => {
	return (
		<Layout>
			<Section>
				<Hero>
					<h1>This is the frontpage</h1>
					<div className='cardsContainer'>
						<Link
							className='bg-themeExperiments'
							to={'experiments'}
						>
							<div>Go see some fun coding experiments</div>
						</Link>
						<Link className='bg-themeAbout' to={'about'}>
							<div>Curious what this site is all about?</div>
						</Link>
						<Link className='bg-themeBlog' to={'blog'}>
							<div>Or go to the empty blog</div>
						</Link>
					</div>
				</Hero>
			</Section>
		</Layout>
	)
}

export default IndexPage
