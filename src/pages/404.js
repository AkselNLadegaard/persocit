import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Section from '../components/Section'
// markup
const NotFoundPage = () => {
	return (
		<Layout>
			<Section>
				<h1>Page not found</h1>
				<Link to={'/'}>Frontpage</Link>
			</Section>
		</Layout>
	)
}

export default NotFoundPage
