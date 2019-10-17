import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import NavBar from "./navBar"
import Seo from "./seo"

class Layout extends React.Component {
  	render() {
    	const { children } = this.props
    	return (
			<Wrapper>
				<Seo />
				<NavBar/>
				<div style={{marginLeft: `auto`,marginRight: `auto`,width: '100%', height: "auto", padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`, }}>
					<main>{children}</main>
				</div>
			</Wrapper>
    	)
  	}
}

const Wrapper = styled.div`
	min-height: 100vh;
	aligne-item: center;
	background-color: #EFEFEF;
`

export default Layout
