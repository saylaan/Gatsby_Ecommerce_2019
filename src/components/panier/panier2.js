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


class PanierPage2 extends React.Component {
    render() {
      return (
        <Wrapper>
            <Header/>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`
export default PanierPage2
