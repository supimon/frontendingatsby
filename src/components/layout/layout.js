/**
 * Created by supimon on 20/07/19.
 */
import React from "react"
import Footer from "../footer/footer"
import Header from "../header/header"
import Container from "react-bootstrap/Container"
// import bootstrap styles in one place
import "bootstrap/dist/css/bootstrap.css"

const Layout = props => (
  <Container>
    <Header/>
    {props.children}
    <Footer/>
  </Container>
)

export default Layout