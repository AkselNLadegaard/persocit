import React from 'react'
import Layout from '../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Section from '../components/Section'
import { MDXProvider } from '@mdx-js/react'

const shortcodes = { Link } // Provide common components here
// take a look at the various remark plugins for transforming MDX.
export default function BlogPost({ data: { mdx } }) {
	return (
		<Layout>
			<Section>
				<MDXRenderer>{mdx.body}</MDXRenderer>
			</Section>
		</Layout>
	)
}
export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				date
				category
				lead
			}
		}
	}
`
