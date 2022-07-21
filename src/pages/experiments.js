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
						<h3>Overview of the way theming is handled here</h3>
					</a>
				</ExperimentCardContainer>
			</Section>
		</Layout>
	)
}

export default Experiments
