import React from "react"
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';

class IndexPage extends React.Component {
  	render() {
    	return (
        	<Layout>
				<h1 class="text-center mb-5 font-weight-bold font-italic">GatsbyCommerce</h1><br/>
				<StaticQuery
					query={homePageQuery}
					render={data => {
						return (
							<Container>
								<Image fixed={data.homePage.childImageSharp.fixed} style={{ marginLeft: `100px`, marginRight: `100px`,}}/>
								<p style={{fontSize: `30px`,}}>
									Description
								</p>
							</Container>
						)
					}}
				/>
        	</Layout>     
    	)
  	}
}

const Container = styled.div`
  display: flex;
`

const homePageQuery = graphql`
	query homePage {
		homePage: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
			childImageSharp {
				fixed(width: 400, height: 400) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`

export default IndexPage
