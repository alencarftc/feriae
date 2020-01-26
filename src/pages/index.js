import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import '../style.scss'
import IsHoliday from "../components/is-holiday";

const IndexPage = () => (
  <Layout>
    <SEO title="Início" />
    <IsHoliday></IsHoliday>
  </Layout>
)

export default IndexPage
