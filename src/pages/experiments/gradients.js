import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Section from '../../components/Section'

const GradientContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 20ch);
	grid-auto-rows: minmax(20ch);
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
		<Layout>
			<Section>
				<h1>Experiments</h1>
				<p>A bunch of experiments!</p>
			</Section>

			<Section>
				<GradientContainer></GradientContainer>
			</Section>
		</Layout>
	)
}

export default Experiments
