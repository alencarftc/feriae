import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Não encontrado" />
    <h1>Página não encontrada</h1>
    <p>Poxa... Você encontrou uma página inexistente. :(</p>
  </Layout>
)

export default NotFoundPage
