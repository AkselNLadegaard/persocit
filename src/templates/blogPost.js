import React         from 'react'
import Layout        from '../components/layout/Layout'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import {graphql, Link} from 'gatsby'
import Section         from '../components/general/Section'
import {MDXProvider}   from '@mdx-js/react'

const shortcodes = {Link} // Provide common components here
// take a look at the various remark plugins for transforming MDX.
export default function BlogPost({data: {mdx}}) {
    return (
        <Layout>
            <Section>
                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
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
				dateCreated
                tags
                type
                misc
                title
                description
                dateUpdated
			}
		}
	}
`
