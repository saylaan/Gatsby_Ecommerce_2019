import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { Card, Button, CardGroup, Col, Row } from "react-bootstrap"
import Data from "./data"

const ThemeData = JSON.stringify(Data.Theme);

class Shop extends React.Component {
  	render() {
		let theme
		const { data } = this.props
		const postList = data.allMarkdownRemark;
		JSON.parse(ThemeData, (key, value) => {
			if (value === "theme1" || value === "theme4") {
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
											<Button
												className='snipcart-add-item'
												data-item-id={node.frontmatter.id}
												data-item-price={node.frontmatter.price}
												data-item-name={node.frontmatter.name}
												data-item-description={node.frontmatter.description}
												data-item-image={node.frontmatter.gallery}
												data-item-url={"https://gatsbycommerce.netlify.com" + node.fields.slug} //REPLACE WITH OWN URL
												style={{ fontSize: "25px" }} variant="danger">
												Acheter
											</Button>
										</Card.Body>
									</Col>
								</Row>

							</Card>
						))}
					</CardGroup>
				)
			} else if (value === "theme2" || value === "theme3") {
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
												<Button
												className='snipcart-add-item'
												data-item-id={node.frontmatter.id}
												data-item-price={node.frontmatter.price}
												data-item-name={node.frontmatter.name}
												data-item-description={node.frontmatter.description}
												data-item-image={node.frontmatter.gallery}
												data-item-url={"https://gatsbycommerce.netlify.com" + node.fields.slug} //REPLACE WITH OWN URL
												style={{ fontSize: "25px" }} variant="danger">
												Acheter
											</Button>
											</Card.Body>
										</Col>
									</Row>
								</Card>
							))}
						</CardGroup>
					</Wrapper>		
				)
			}
		})
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
					id
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
