/**
 * Created by supimon on 20/07/19.
 */
import React from "react"
import Footer from "./footer"
import Header from "./header"

const Layout = props => (
  <div>
    <Header/>
    {props.children}
    <Footer/>
  </div>
)

export default Layout