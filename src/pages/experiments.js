import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import { themer } from '../abstracts/themer'
import { themes } from '../abstracts/constants'

const Experiments = () => {
	return (
		<Layout theme={themer(...themes.prmAlt)}>
			<Section
				css={themer('#ffa07a', '#ffd700', '#abe338')}
				bgColor={'var(--primary)'}
			>
				<h1>Wow</h1>

				<h2>This is a h2 </h2>
			</Section>
		</Layout>
	)
}

export default Experiments
