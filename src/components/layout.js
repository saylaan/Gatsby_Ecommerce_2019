import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import NavBar from "./navBar"

class Layout extends React.Component {
  	render() {
    	const { children } = this.props

    	return (
			<Wrapper>
				<NavBar/>
				<div style={{marginLeft: `auto`,display: 'inline-block',marginRight: `auto`,width: '100%',padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,}}>
					<main>{children}</main>
				</div>
			</Wrapper>
    	)
  	}
}

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout
