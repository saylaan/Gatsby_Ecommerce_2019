import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Boutique2 from "../components/boutique/boutique2"


class Blog extends React.Component {
  render() {
    const { data } = this.props
    const postList = data.allMarkdownRemark;

    return (
      <Boutique2>
          <SEO title="Boutique" />
          <div class="d-flex p-3 bg-secondary lign-content-start flex-wrap justify-content-around">
            {postList.edges.map(({ node }, i) => (
                <div class="card mb-3" style={{maxWidth: 600, width:600, marginTop: 30, marginRight: 30}}>
                    <div class="row no-gutters">
                      <div class="col-md-5">
                        <img src={node.frontmatter.gallery} alt=""/>
                      </div>
                    <div class="col-md-6">
                        <div class="card-body">
                          <Link to={"shop/" + node.fields.slug} key={i} className="link" >
                            <h5 class="card-title text-center" style={{fontSize: "30px"}}>{node.frontmatter.name} {node.frontmatter.id}</h5>
                          </Link>
                        </div>
                        <div class="price text-center pt-2">
                            <p style={{fontSize: "50px"}}>{node.frontmatter.price + " €"}</p>
                            <Link to={"shop/" + node.fields.slug} key={i} className="link" >
                              <div class="btn btn-lg btn-danger mt-2">Acheter <span class="glyphicon glyphicon-euro"></span></div>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
            </div>
      </Boutique2>
      )
    }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
