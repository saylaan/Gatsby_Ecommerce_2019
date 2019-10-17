import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';

class IndexPage extends React.Component {
  	render() {
		const { data } = this.props
		const postList = data.allMarkdownRemark;
    	return (
        	<Layout>
				{postList.edges.map(({ node }, i) => (

				<Wrapper>
				<h1 class="text-center mb-5 font-weight-bold font-italic">{node.frontmatter.title}</h1><br/>
					<Container class="d-flex justify-content-start">
						<img src={node.frontmatter.gallery} alt="" style={{ marginLeft: `100px`, marginRight: `100px`,}}/>
						<p style={{fontSize: `30px`,}}>
							{node.frontmatter.description}
						</p>
					</Container>
				</Wrapper>
					
				))}
			</Layout>     
    	)
  	}
}

const Container = styled.div`
  display: flex;
`

const Wrapper = styled.div`
  min-height: 100vh;
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
