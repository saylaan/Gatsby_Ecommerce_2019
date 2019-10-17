import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { Card, Button, CardGroup, Col, Row } from "react-bootstrap"
import Data from "./data"

let ThemeData = Data.Theme;

class Shop extends React.Component {
  	render() {
		let theme
		const { data } = this.props
		const postList = data.allMarkdownRemark;
		if (ThemeData === "theme1" || ThemeData === "theme4") {
			theme = (
				<CardGroup class="d-flex p-3 bg-secondary lign-content-start flex-wrap justify-content-around">
					{postList.edges.map(({ node }, i) => (
						<Card class="card mb-3" style={{maxWidth: 600, width:600, marginTop: 30, marginRight: 30}} to={"shop/" + node.fields.slug} key={i} className="link">
							<Row>
								<Col sm={6}>
									<Card.Img src={node.frontmatter.gallery} />
								</Col>
								<Col>
									<Card.Body>
										<Card.Text className="text-center" style={{fontSize: "30px"}}>
											{node.frontmatter.name}
										</Card.Text>
										<Card.Text className="text-center mt-5 mb-5" style={{fontSize: "30px"}}>
											{node.frontmatter.price + " €"}
										</Card.Text>
										<Button href={"shop" + node.fields.slug} className="mr-3" style={{fontSize: "25px"}} variant="primary">Détails</Button>
										<Button style={{fontSize: "25px"}} variant="danger">Acheter</Button>
									</Card.Body>
								</Col>
							</Row>

						</Card>
					))}
				</CardGroup>
			)
		} else if (ThemeData === "theme2" || ThemeData === "theme3") {
			theme = (
				<Wrapper style={{marginTop: "150px"}}>
					<style> {`
						.scrolling-wrapper-flexbox {
							display: -ms-flex;
							display: -webkit-flex;
							display: flex;
							overflow-x: scroll;
						
							.card {
								flex: 0 50%;
							}
						}
					`}

					</style>
					<CardGroup class="scrolling-wrapper-flexbox">
						{postList.edges.map(({ node }, i) => (
							<Card class="card mb-3" style={{maxWidth: 600, width:600, minWidth: 600, marginTop: 30, marginBottom: "50px", marginRight: 30}} to={"shop/" + node.fields.slug} key={i} className="link">
								<Row>
									<Col class="text-center" sm={6}>
										<Card.Img src={node.frontmatter.gallery} />
									</Col>
									<Col>
										<Card.Body>
											<Card.Text className="text-center" style={{fontSize: "30px"}}>
												{node.frontmatter.name}
											</Card.Text>
											<Card.Text className="text-center mt-5 mb-5" style={{fontSize: "30px"}}>
												{node.frontmatter.price + " €"}
											</Card.Text>
											<Button href={"shop" + node.fields.slug} className="mr-3" style={{fontSize: "25px"}} variant="primary">Détails</Button>
											<Button style={{fontSize: "25px"}} variant="danger">Acheter</Button>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						))}
					</CardGroup>
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

const Wrapper = styled.div`
	min-height: auto;
	text-align: center;  
`

export default Shop

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC },
			filter: { fileAbsolutePath: {regex : "\/shop/"} },) {
			edges {
				node {
					excerpt
					fields {
						slug
				}
				frontmatter {
					date(formatString: "MMMM DD, YYYY")
					title
					name
					description
					price
					gallery
				}
			}
		}
		}
	}
`
