import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import { rhythm, scale } from "../../utils/typography"
import Header from "../header2"


class HomePage2 extends React.Component {
    render() {
        const { children } = this.props
      return (
        <Wrapper>
            <Header/>
            <div
                style={{
                    marginLeft: `auto`,
                    display: 'inline-block',
                    marginRight: `auto`,
                    maxWidth: rhythm(74),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
                >
                <StaticQuery
                    query={homePage2Query}
                    render={data => {
                        return (
                            <Container>
                                <Image
                                    fixed={data.logoPage.childImageSharp.fixed}
                                    style={{
                                        marginLeft: `100px`,
                                        marginRight: `100px`,
                                    }}
                                />
                                <p style={{
                                        fontSize: `30px`,
                                    }}
                                >
                                    Description
                                </p>
                            </Container>
                        )
                    }}
                />
                <main>{children}</main>
            </div>
      </Wrapper>
    )
  }
}

const homePage2Query = graphql`
  query LogoQuery {
    logoPage: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
`
const Container = styled.div`
  display: flex;
`
export default HomePage2
