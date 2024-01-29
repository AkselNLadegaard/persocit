import React from 'react'
import Layout from '../components/layout/Layout'
import { MDX } from 'gatsby-plugin-mdx'
import { graphql, Link } from 'gatsby'
import Section from '../components/general/Section'
import { MDXProvider } from '@mdx-js/react'
import { themes } from "../abstracts/constants";

const shortcodes = { Link, Section } // Provide common components here
// take a look at the various remark plugins for transforming MDX.
export default function BlogPost({ data, children }) {

  return (
    <>
      <Layout theme={themes.default}
        type='default'>

        <MDXProvider components={shortcodes}>
          {children}
        </MDXProvider>
      </Layout >
    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`