import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Card, Button, CardGroup, Col, Row } from "react-bootstrap"

class Item extends React.Component {
  	render() {
		const { data } = this.props
		const postList = data.allMarkdownRemark;
		return (
			<Layout>
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
			</Layout>
		)
    }
}

export default Item

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
