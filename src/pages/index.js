import React from "react"
import { Link } from "gatsby"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Layout from "../components/layout/layout"

const IndexPage = () => (
  <Layout>
    <h1>Welcome Recruits!</h1>
    <h3>So we switch to React, the Beautiful, henceforth.</h3>
    <p>A word <a href="/about">About me</a></p>
    <p>Click here <Link to="/contact">Contact me</Link></p>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Layout>
)

export default IndexPage