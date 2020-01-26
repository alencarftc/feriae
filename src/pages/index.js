import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import IsHoliday from "../components/is-holiday";
import '../style.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
    <IsHoliday></IsHoliday>
  </Layout>
)

export default IndexPage
