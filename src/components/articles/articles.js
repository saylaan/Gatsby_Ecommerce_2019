import React from "react"
import styled from "styled-components"
import { rhythm } from "../../utils/typography"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "../header2"

class Article2 extends React.Component {
    render() {
        const { children } = this.props
      return (
        <Wrapper>
            <Head/>
            <div
                style={{
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
export default Article2