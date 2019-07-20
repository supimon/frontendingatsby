import React from "react"
import { Link } from "gatsby"

export default () => (
  <div>
    <h1>Welcome!</h1>
    <h3>This is a test site created for learning Gatsby.</h3>
    <p>A word <a href="/about">About me</a></p>
    <p>Click here <Link to="/contact">Contact me</Link></p>
  </div>
)
