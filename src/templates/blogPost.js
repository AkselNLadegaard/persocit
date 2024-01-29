import React from 'react'

import Layout from '../components/layout/Layout'
import { themes } from "../abstracts/constants";

import { graphql, Link } from 'gatsby'
import Section from '../components/general/Section'
import { MDXProvider } from '@mdx-js/react'

const shortcodes = { Link, Section, themes }

export default function BlogPost({ data, children }) {

  return (
    <>
      <Layout>
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
        theme
      }
    }
  }
`