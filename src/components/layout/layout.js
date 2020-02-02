import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from '../navbar/index';
import "./layout.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const links = [
    { id: 2, title: "Amanhã é feriado?", href: "/tomorrow" },
    { id: 3, title: "Próximos feriados", href: "/next-holidays" },
    { id: 4, title: "Sobre", href: "/about" },            
  ];

  return (
    <>
      <Navbar props={{ siteTitle: data.site.siteMetadata.title, links }} />

      <div className="content-layout">
        <main className="content-area">{children}</main>
      </div>
      <footer className="footer">
        Made by &nbsp;
        <a href="https://www.github.com/alencarfff">Felipe Alencar</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
