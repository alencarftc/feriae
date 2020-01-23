import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HomePage from "./home/home"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage></HomePage>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
