import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Não encontrado" />
    <h1>Página não encontrada.</h1>
    <p>Você acaba de se deparar com uma página inexistente.</p>
  </Layout>
)

export default NotFoundPage
