import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import {Navbar, Nav, Row, Col} from 'react-bootstrap'
import NavLink from "react-bootstrap/NavLink"

class NavBar extends React.Component {
	render() {
		let header
			header = (
				<Wrapper >
					<StaticQuery
					query={navBarQuery}
						render={data => {
							return(
								<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
									{data.logo2.edges.map(({ node }, i) => (
										<Navbar.Brand  href="/" style={{ textDecoration: "none"}}>
											<img src={node.frontmatter.gallery} alt="" style={{ width: "50px", height: "50px"}}/>
										</Navbar.Brand>
									))}
									<Navbar.Toggle aria-controls="responsive-navbar-nav" />
									<Navbar.Collapse id="responsive-navbar-nav">
										<Nav className="mr-auto ml-4" style={{fontSize: "22px"}}>
											<Nav.Link className="mr-4 text-center" href="/">Home</Nav.Link>
											<Nav.Link className="text-center" href="/boutique">Shop</Nav.Link>	
										</Nav>
										<Nav className="text-center ">
											<Nav.Link to="/connection" activeClassName="active" style={{ textDecoration: "none"}}>
												<Col className="show-grid">
													<Row>
														<Image className="rounded mx-auto d-block" fixed={data.connection.childImageSharp.fixed} />
													</Row>
													<Row className="row justify-content-center">
														Connection
													</Row>
												</Col>
											</Nav.Link>
											<NavLink style={{ textDecoration: "none"}}> 
												<Col  className="show-grid text-center">
													<Row>
														<Image className="rounded mx-auto d-block" fixed={data.panier.childImageSharp.fixed} />
													</Row>
													<Row className="row justify-content-center">
														Panier
													</Row>
												</Col>
											</NavLink>
										</Nav>
									</Navbar.Collapse>
							</Navbar>
							)
						}}
					/>
				</Wrapper>
			)
		return (
			<header>{header}</header>
		)
	}
}

const Wrapper = styled.div`
	  height: auto;
`

export const navBarQuery = graphql`
	query navBar {
		logo: file(absolutePath: { regex: "/gatsby-icon.png/" }) {
			childImageSharp {
				fixed(width: 50, height: 50) {
					...GatsbyImageSharpFixed
				}
			}
		}
		panier: file(absolutePath: { regex: "/panier.png/" }) {
			childImageSharp {
				fixed(width: 50, height: 50) {
					...GatsbyImageSharpFixed
				}
			}
		}
		connection: file(absolutePath: { regex: "/connection.png/" }) {
			childImageSharp {
				fixed(width: 50, height: 50) {
					...GatsbyImageSharpFixed
				}
			}
		}
		logo2: allMarkdownRemark(
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

export default NavBar