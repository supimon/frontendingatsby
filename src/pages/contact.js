/**
 * Created by supimon on 20/07/19.
 */
import React from "react"
import Layout from "../components/layout/layout"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"

const ContactPage = () => {

  const styles = {
    height: '1000px'
  }

  return(
    <Layout>
      <h1>Contact Page</h1>
      <h3>Email: <a href="mailto:supimon@gmail.com">supimon@gmail.com</a></h3>
      <h3>Cell: <a href="tel:00919995438403">+91-9995438403</a></h3>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div style={styles}></div>
    </Layout>
  )}

export default ContactPage