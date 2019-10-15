import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import { rhythm, scale } from "../../utils/typography"
import Img from "gatsby-image"
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "../header2"

class Boutique2 extends React.Component {
    render() {
        const { children } = this.props
      return (
        <Wrapper>
            <Head/>
            <div
                style={{
                    marginLeft: `auto`,
                    display: 'inline-block',
                    marginRight: `auto`,
                    maxWidth: rhythm(74),
                    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
                >
                <main>{children}</main>
            </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`
const Container = styled.div`
  display: flex;
`
export default Boutique2