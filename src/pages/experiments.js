import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { themes } from '../abstracts/constants'

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
		<Layout theme={themes.experiments}>
			<Section>
				<h1>Experiments</h1>
				<p>A bunch of experiments!</p>
				<p>
					I dream of having one for every major UI element, to
					illustrate the breadth of possibilities with CSS with a
					little sprinkle of js
				</p>
			</Section>

			<Section>
				<ExperimentCardContainer>
					<a
						href='/experiments/theming'
						title={'Go see the theming experiments'}
						className='card'
					>
						<h3>Overview of theming</h3>
						<p>
							Needlesly copmlicated theming happens on this site
						</p>
					</a>
					<a
						href='/experiments/typographyPlayground'
						title={'Go see the typography experiments'}
						className='card'
					>
						<h3>Typography</h3>
						<p>All of the typographic elements!</p>
					</a>
					<a
						href='/experiments/gradients'
						title={'Go see the gradient experiments'}
						className='card'
					>
						<h3>Gradients</h3>
						<p>Uh want to see some cool gradients?</p>
					</a>

					<a
						href='/experiments/buttons'
						title={'Go see the gradient experiments'}
						className='card'
					>
						<h3>Buttons</h3>
						<p>Feeeling hovery? Clicky? Click on some buttons!</p>
					</a>
					<a
						href='/experiments/clipPaths'
						title={'Go see the clip path experiments'}
						className='card'
					>
						<h3>Clip Paths</h3>
						<p>Feeeling Clippy?</p>
					</a>
					<a
						href='/experiments/cards'
						title={'Go see the card experiments'}
						className='card'
					>
						<h3>Cards</h3>
						<p>Feeeling Clippy?</p>
					</a>
					<a
						href='/experiments/interactiveStyles'
						title={'Go see the card experiments'}
						className='card'
					>
						<h3>Interactive styles</h3>
					</a>
				</ExperimentCardContainer>
			</Section>
		</Layout>
	)
}

export default Experiments
