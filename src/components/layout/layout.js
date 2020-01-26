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
    { id: 1, title: "Início", href: "/" },
    { id: 2, title: "Amanhã é feriado?", href: "/tomorrow" },
    { id: 3, title: "Próximos feriados", href: "/next-holidays" },
    { id: 4, title: "Sobre", href: "/about" },            
  ];

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} links={links}   />
      <div className="content-layout">
        <main className="content-area">{children}</main>
        {/* <footer>
          Made by &nbsp;
          <a href="https://www.github.com/alencarfff">Felipe Alencar</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
