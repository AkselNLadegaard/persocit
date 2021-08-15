import React from 'react'
import Layout from '../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Section from '../components/Section'

const Blog = ({ data }) => {
	return (
		<Layout>
			<Section>
				<h1> Blog overview</h1>
				<ul>
					{data.allMdx.nodes.map((nodes, index) => (
						<li key={index}>
							<Link to={nodes.slug}>
								{nodes.frontmatter.title}
							</Link>
							<br />
							<sup>Posted the: {nodes.frontmatter.date}</sup>
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
			filter: { frontmatter: { category: { eq: "blogPost" } } }
			sort: { fields: frontmatter___date, order: DESC }
		) {
			nodes {
				frontmatter {
					date
					title
					lead
				}
				id
				slug
			}
		}
	}
`
export default Blog
