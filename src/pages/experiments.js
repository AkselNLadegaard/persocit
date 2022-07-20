import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import { themer } from '../abstracts/themer'
import { themes } from '../abstracts/constants'
import styled from '@emotion/styled'

const ThemeTestContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 20ch);
	grid-auto-rows: minmax(20ch, auto);
`

const Experiments = () => {
	return (
		<Layout theme={themer(...themes.prmAlt)}>
			<Section
				css={themer('#ffa07a', '#ffd700', '#abe338')}
				bgColor={'var(--primary)'}
			>
				<ThemeTestContainer>
					{Object.keys(themes).map((value, index) => (
						<div key={index} css={themer(...themes[value])}>
							<h3>This is a header</h3>
							<a href=''>this is an empty link</a>
							<button>Click me</button>
							😳
						</div>
					))}
				</ThemeTestContainer>
			</Section>
		</Layout>
	)
}

export default Experiments
