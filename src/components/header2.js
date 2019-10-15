import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import { rhythm, scale } from "../utils/typography"


class Header2 extends React.Component {
    render() {
        const { children } = this.props
        let header

        header = (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <StaticQuery
                    query={header2Query}
                    render={data => {
                        return(
                            <Link to="/" activeClassName="active">
                                <Image fixed={data.logo.childImageSharp.fixed} />
                            </Link>
                        )}}
                />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse ml-5" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active mr-4">
                            <a style={{fontSize: "20px"}} class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a style={{fontSize: "20px"}} class="nav-link" href="/boutique">Boutique</a>
                        </li>
                    </ul>
                    <StaticQuery
                        query={header2Query}
                        render={data => {
                            return(
                                <ul class="navbar-nav">
                                    <li class=" nav-item text-center mr-5">
                                        <Link to="/connection" activeClassName="active">
                                            <Image fixed={data.connection.childImageSharp.fixed} />
                                            <p>Connection</p>
                                        </Link>
                                    </li>
                                    <li class="nav-item text-center mr-5">
                                        <Link to="/panier" activeClassName="active">
                                            <Image fixed={data.panier.childImageSharp.fixed} />
                                            <p>Panier</p>
                                        </Link>
                                    </li>
                                </ul>     
                            )}}
                    />
                </div>
            </nav>
        )
      return (
        <header>{header}</header>
    )
  }
}

const header2Query = graphql`
  query Header2Query {
    logo: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    panier: file(absolutePath: { regex: "/panier.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
    }
    connection: file(absolutePath: { regex: "/connection.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
    }
  }
`

export default Header2
