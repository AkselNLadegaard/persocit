import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1>This is such a lovely site</h1>
      <p>Yeah it really is!</p>
      <Link to={'/'}>This is a nice link</Link>
    </Layout>
  )
}

export default IndexPage
