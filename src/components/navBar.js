import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import NavLink from "react-bootstrap/NavLink"

class NavBar extends React.Component {
	state = {
		items: 0
	}

	updateItemTotal = (qty) => {
		this.setState({ items: qty })
	}

	componentDidMount() {
		if (window.Snipcart) {
			//this allows it to work when switching pages
			var count = window.Snipcart.api.items.count();
			this.updateItemTotal(count)

			//this allows it to work when you add or change items
			window.Snipcart.subscribe('cart.closed', () => {
				var count = window.Snipcart.api.items.count();
				this.updateItemTotal(count)
			});

			//this allows it to work on refreshing the page
			window.Snipcart.subscribe('cart.ready', (data) => {
				var count = window.Snipcart.api.items.count();
				this.updateItemTotal(count)
			})
		}
	}

	componentWillUnmount() {
		window.Snipcart.unsubscribe('cart.closed');
		window.Snipcart.unsubscribe('cart.ready');
	}

	render() {
		let header
		header = (
			<Wrapper >
				<StaticQuery
					query={navBarQuery}
					render={data => {
						return (
							<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
								{data.logo2.edges.map(({ node }, i) => (
									<Navbar.Brand href="/" style={{ textDecoration: "none" }}>
										<img src={node.frontmatter.gallery} alt="" style={{ width: "50px", height: "50px" }} />
									</Navbar.Brand>
								))}
								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="mr-auto ml-4" style={{ fontSize: "22px" }}>
										<Nav.Link className="mr-4 text-center" href="/">Home</Nav.Link>
										<Nav.Link className="mr-4 text-center" href="/shop">Shop</Nav.Link>
									</Nav>
									<Nav className="text-center ">
									<Nav.Link to="/connection" activeClassName="active" style={{ textDecoration: "none" }}>
											<Col className="show-grid">
												<Row>
													<Image className="rounded mx-auto d-block" fixed={data.connection.childImageSharp.fixed} />
												</Row>
												<Row className="row justify-content-center">
													Connection
													</Row>
											</Col>
										</Nav.Link>
										<Nav.Link style={{ textDecoration: "none" }}>
										<div class="snipcart-summary">
											<a href="/shop" className="snipcart-checkout">
											<Image className="rounded mx-auto d-block" fixed={data.panier.childImageSharp.fixed} />
											<Col className="show-grid text-center">
												<Row>
												</Row>
												<Row className="row justify-content-center">
													<p class="snipcart-total-items">{this.state.items} Panier</p>
												</Row>
											</Col>
											</a>
										</div>
										</Nav.Link>
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