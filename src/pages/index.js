import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Landing from "../components/Landing"
import About from "../components/About"
import Portfolio from "../components/Portfolio"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Landing />
    <About />
    <Portfolio />
  </Layout>
)

export default IndexPage
