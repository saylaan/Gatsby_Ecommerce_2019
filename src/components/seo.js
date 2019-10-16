/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, keywords, title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)
	const metaDescription = description || site.siteMetadata.description
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			link={[
				{
					rel: "stylesheet"
				},
				{
					href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				},
				{
					integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				},
				{
					crossorigin: "anonymous"
				},
			]}
			meta={[
				{
				name: `description`,
				content: metaDescription,
				},
				{
				property: `og:title`,
				content: title,
				},
			]}
		/>
	)
}

export default SEO
