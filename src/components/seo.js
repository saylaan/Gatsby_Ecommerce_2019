import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

class SEO extends React.Component {
	render() {
		let meta
		meta = (
			<StaticQuery
				query={siteQuery}
				render={data => {
					return (
						<Helmet>
							<title> {data.site.siteMetadata.title} </title>
							<link
								rel="stylesheet"
								href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
								integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
								crossorigin="anonymous"
							/>
							<meta description="{data.site.siteMetadata.description}"/>
							<meta author="{data.site.siteMetadata.author}"/>
						</Helmet>
					)
				}}
			/>
		)
		return (
			<head>{meta}</head>
		)
	}
}

export const siteQuery = graphql`
	query  {
		site {
			siteMetadata {
				title
				author
				description
				siteUrl
			}
		}
	}
`

export default SEO
