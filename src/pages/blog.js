import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Section from '../components/Section'
import { themes } from '../abstracts/constants'

function isEmpty(str) {
	return !str || str.length === 0
}

const Blog = ({ data }) => {
	return (
		<Layout theme={themes.blog}>
			<Section>
				<h1> Blog overview</h1>
				<ul>
					{data.allMdx.nodes.map((nodes, index) => (
						<li key={index}>
							<Link to={nodes.slug}>
								{nodes.frontmatter.title}
							</Link>
							<br />
							<sup>
								Created the: {nodes.frontmatter.dateCreated}
							</sup>
							{isEmpty(nodes.frontmatter.dateUpdated) && (
								<sup>
									Updated the: {nodes.frontmatter.dateUpdated}
								</sup>
							)}
						</li>
					))}
				</ul>
			</Section>
		</Layout>
	)
}

export const query = graphql`
	{
		allMdx(
			filter: { frontmatter: { type: { eq: "blogPost" } } }
			sort: { fields: frontmatter___dateCreated, order: DESC }
		) {
			nodes {
				frontmatter {
					dateCreated
					tags
					type
					misc
					title
					description
					dateUpdated
				}
				id
				slug
			}
		}
	}
`
export default Blog
