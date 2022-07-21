import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import { Theme } from '../abstracts/themer'
import styled from '@emotion/styled'

const ExperimentCardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 20ch);
	grid-gap: var(--gap);

	.card {
		padding: var(--gap);
		border: dotted 2px;

		:hover,
		:focus,
		:active {
			border: solid 2px;
		}
	}
`

const Experiments = () => {
	return (
		<Layout theme={new Theme({ primary: '#2da98c' }).theme}>
			<Section>
				<h1>Experiments</h1>
				<p>A bunch of experiments!</p>
			</Section>

			<Section>
				<ExperimentCardContainer>
					<a href='/experiments/theming' className='card'>
						<h3>Overview of theming</h3>
						<p>
							Needlesly copmlicated theming happens on this site
						</p>
					</a>
					<a
						href='/experiments/typographyPlayground'
						className='card'
					>
						<h3>Typography</h3>
						<p>All of the typographic elements!</p>
					</a>
					<a href='/experiments/gradients' className='card'>
						<h3>Gradients</h3>
						<p>Uh want to see some cool gradients?</p>
					</a>
				</ExperimentCardContainer>
			</Section>
		</Layout>
	)
}

export default Experiments
