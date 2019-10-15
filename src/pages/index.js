import React from "react"
import HomePage2 from "../components/homePage/homePage2"
import SEO from "../components/seo"


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
        <HomePage2>
          <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <p>hello</p>
        </HomePage2>     
    )
  }
}

export default IndexPage
