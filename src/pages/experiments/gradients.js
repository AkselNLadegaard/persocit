import React from 'react'
import styled from '@emotion/styled'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import { themes } from '../../abstracts/constants'
import { css } from '@emotion/react'

const GradientContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 20ch);
	grid-auto-rows: minmax(20ch, auto);
	grid-gap: var(--gap);

	.card {
		padding: var(--gap);
		aspect-ratio: 1 / 1;
		border: dotted 2px;
	}

	.linearGradient {
		background: linear-gradient(
			var(--primary),
			var(--secondary),
			var(--tertiary)
		);
	}

	.radialGradient {
		background: radial-gradient(
			var(--primary),
			var(--secondary),
			var(--tertiary)
		);
	}
`

const Experiments = () => {
	return (
		<Layout>
			<Section>
				<h1>Gradient fun!</h1>
				<p>Messing around with gradients </p>
			</Section>

			<Section>
				<h2></h2>
				<GradientContainer>
					{Object.keys(themes).map((value, index) => (
						<div
							key={index}
							css={css`
								${themes[value].theme}
							`}
							className={'card linearGradient'}
						></div>
					))}
				</GradientContainer>
			</Section>
			<Section>
				<h2></h2>
				<GradientContainer>
					{Object.keys(themes).map((value, index) => (
						<div
							key={index}
							css={css`
								${themes[value].theme}
							`}
							className={'card radialGradient'}
						></div>
					))}
				</GradientContainer>
			</Section>
		</Layout>
	)
}

export default Experiments
