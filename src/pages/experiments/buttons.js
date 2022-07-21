import * as React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import styled from '@emotion/styled'

const ButtonCardContainer = styled.div`
	--borderCard: 2px dashed var(--primary);
	display: grid;
	grid-template-columns: repeat(auto, 3);
`

const ButtonCard = styled.div`
	padding: var(--gap);
	border: var(--borderCard);
`

const IndexPage = () => {
	return (
		<Layout>
			<Section>
				<h1>Buttons</h1>
				<p>
					There are many ways of making buttons - these are some of
					them
				</p>
				<p>Inspect the buttons or go look at the repository.</p>
			</Section>
			<Section>
				<ButtonCardContainer>
					<ButtonCard>
						<h3>Default buttons</h3>
						<p>Default button options in the style</p>
						<button>Interact with the primary button!</button>
						<button className='btn-sec'>
							Interact with the secondary button!
						</button>
						<button className='btn-ter'>
							Interact with the tertiary button!
						</button>
					</ButtonCard>
				</ButtonCardContainer>
			</Section>
		</Layout>
	)
}

export default IndexPage
