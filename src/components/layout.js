import React from 'react'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Navbar from './navbar'
import Main from './main'
import Slide from './slide'
import About from './about'
import "./layout.css"

export default function Layout({children}) {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    
    return (
        <div>
          
            <Main/> 
            {/* <Navbar/> */}
            <Slide/>
            <About/>
        </div>


    )
}


