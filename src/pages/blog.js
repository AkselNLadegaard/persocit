import React from 'react'
import Layout from '../components/layout/Layout'
import { graphql, Link } from 'gatsby'
import Section from '../components/general/Section'
import { themes } from '../abstracts/constants'
import slugify from "slugify";

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
							<Link to={slugify(nodes.frontmatter.title)}>
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
			filter: { frontmatter: { type: { eq: "blogpost" } } }
			sort: { frontmatter: { dateCreated: DESC }}
		) {
			nodes {
				frontmatter {
					title
					description
					dateCreated
					dateUpdated
					tags
					type
				}
				id
			}
		}
	}
`
export default Blog
