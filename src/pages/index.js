import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Data from "./data"

const ThemeData = Data.Theme;

class IndexPage extends React.Component {
  	render() {
		let theme
		const { data } = this.props
		const postList = data.allMarkdownRemark
		if (ThemeData == "theme1" || ThemeData == "theme3") {
			theme = (
				<Wrapper style={{marginBottom: "100px", marginTop: '80px'}}>
					{postList.edges.map(({ node }, i) => (
						<Wrapper>
							<h1 class="text-center mb-5 font-weight-bold font-italic">{node.frontmatter.title}</h1><br/>
							<Container class="d-flex justify-content-start">
								<img src={node.frontmatter.gallery} alt="" style={{ width: "1000px", marginLeft: `100px`, marginRight: `100px`,}}/>
								<p style={{fontSize: `30px`,}}>
									{node.frontmatter.description}
								</p>
							</Container>
						</Wrapper>					
					))}
				</Wrapper>	
			)
		} else if (ThemeData == "theme2" || ThemeData == "theme4"){
			theme = (
				<Wrapper>
					{postList.edges.map(({ node }, i) => (
						<Wrapper >
							<img src={node.frontmatter.gallery} alt="" style={{ width: "300px", marginLeft: `100px`, marginRight: `100px`,}}/>
							<h1 class="text-center mb-5 font-weight-bold font-italic">{node.frontmatter.title}</h1><br/>
							<p style={{fontSize: `30px`,}}>
								{node.frontmatter.description}
							</p>
						</Wrapper>
					))}
				</Wrapper>	
			)
		}
	
    	return (
        	<Layout>
				<div>{theme}</div>
			</Layout>     
    	)
  	}
}

const Container = styled.div`
  	display: flex;
`

const Wrapper = styled.div`
	min-height: auto;
	text-align: center;  
`

export const homePageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date]},
			filter: { fileAbsolutePath: {regex : "\/homePage/"} },		) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						gallery
						description
					}
				}
			}
		}
	}
`

export default IndexPage
