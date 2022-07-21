import * as React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'

const IndexPage = () => {
	return (
		<Layout>
			<Section>
				<h1>This is the front page</h1>
				<p>There is not a lot to find here... YET!</p>
				<p>
					There is some barebones content under experiments and a few
					technical details on the about page
				</p>
				<p>Still under active development as of 2022-07-21</p>
				<p>
					Its' just a little slow, cause I get distracted by pointless
					technicalities.{' '}
				</p>
			</Section>
		</Layout>
	)
}

export default IndexPage
