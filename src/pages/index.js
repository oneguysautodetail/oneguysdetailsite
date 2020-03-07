import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import Intro from "../components/intro/intro.component"
import Pricing from "../components/pricing/pricing.component"
import Footer from "../components/footer/footer.component"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCarSide, faTruckPickup, faShuttleVan  } from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/layout/layout"

library.add(faCarSide, faTruckPickup, faShuttleVan)


const IndexPage = () => (
  <div>
  <Layout>
  <SEO title="Home" />
  <Intro />
  <Pricing />
  <Footer />
  </Layout>
  </div>
)

export default IndexPage
