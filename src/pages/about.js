/**
 * Created by supimon on 20/07/19.
 */
import React from "react"
import Button from "react-bootstrap/Button"
import ParallaxJumbotron from "../components/parallaxJumbotron/parallaxJumbotron"
import Layout from "../components/layout/layout"

const AboutPage = () => {

  const styles = {
    height: '1000px'
  }

  return (
    <Layout>
      <h1>About Page</h1>
      <h2>Supi</h2>
      <p>Learner. Player.</p>
      <ParallaxJumbotron id="uniqueId" bgImageURL="https://www.solodev.com/assets/flexslider/slide3.jpg">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </ParallaxJumbotron>
      <div style={styles}></div>
    </Layout>
  )
}

export default AboutPage