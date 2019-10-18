
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Card, Button, Col, Row } from "react-bootstrap"
import Data from "../pages/data"

const ThemeData = JSON.stringify(Data.Theme);

class Item extends React.Component {
  	render() {
		let theme
		const post = this.props.data.markdownRemark
		JSON.parse(ThemeData, (key, value) => {
			if (value === "theme1" || value === "theme4") {
				theme = (
					<Card class="card mb-3" style={{maxWidth: 800, width:800, marginTop: 30, marginRight: 30, margin: "0 auto", float: "none",}}>
						<Row>
							<Col sm={6}>
								<Card.Img src={post.frontmatter.gallery} />
							</Col>
							<Col>
								<Card.Body>
									<Card.Text className="text-center mb-2 font-weight-bold font-italic" style={{fontSize: "30px"}}>
										{post.frontmatter.name}
									</Card.Text>
									<Card.Text className="text-center" style={{fontSize: "25px"}}>
										{post.frontmatter.title}
									</Card.Text>
									<Card.Text className="text-center mt-5 mb-5" style={{fontSize: "38px"}}>
										{post.frontmatter.price + " €"}
									</Card.Text>
									<Button style={{fontSize: "25px", display: "block", margin: "0 auto", float: "none",}} variant="danger">Acheter</Button>
								</Card.Body>
							</Col>
						</Row>
						<Card.Text class="col-md-12 text-center" style={{fontSize: "22px"}}>
							{post.frontmatter.description}
						</Card.Text>
						<Card.Text class="text-center" style={{fontSize: "20px"}} dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} >
						</Card.Text>
					</Card>
				)
			} else if (value === "theme2" || value === "theme3"){
				theme = (
					<Card className="bg-dark text-white">
						<Card.Img src={post.frontmatter.gallery} style={{width: "30%", margin: "20px"}}alt="Card image" />
							<Card.ImgOverlay>
								<Row className="row justify-content-end"> 
									<Col className="col-4">
										<Card.Title className="text-center mb-2 font-weight-bold font-italic" style={{fontSize: "40px"}}>
											{post.frontmatter.name}
										</Card.Title>
										<Card.Text className="text-center" style={{fontSize: "30px"}}>
											{post.frontmatter.title}
										</Card.Text>
										<Card.Text class="col-md-12 text-center" style={{fontSize: "28px", marginTop: "35px"}}>
											{post.frontmatter.description}
										</Card.Text>
									</Col>
									<Col className="col-4" style={{marginTop: "50px"}}>
										<Card.Text className="text-center mt-5 mb-5" style={{fontSize: "44px"}}>
											{post.frontmatter.price + " €"}
										</Card.Text>
										<Button style={{fontSize: "35px", display: "block", margin: "0 auto", float: "none",}} variant="danger">Acheter</Button>
									</Col>			
								</Row>			
						</Card.ImgOverlay>
						<Card.Text class="text-left" style={{fontSize: "25px", marginTop: "50px", marginLeft: "250px"}} dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} >
						</Card.Text>
					</Card>
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

export default Item

export const query = graphql`
	query ($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			excerpt
			frontmatter {
				title
				name
				price
				gallery
				description
			}
		}
		site {
		siteMetadata {
			siteUrl
			}
		}
	}
`
