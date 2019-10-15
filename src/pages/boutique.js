import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import Img from "gatsby-image"
import Boutique2 from "../components/boutique/boutique2"


class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const postList = data.allMarkdownRemark;

    return (
        <Boutique2>
            <SEO title="All posts" />
            <div class="d-flex p-3 bg-secondary lign-content-start flex-wrap justify-content-around">
            {postList.edges.map(({ node }, i) => (
                <div class="card mb-3" style={{maxWidth: 800, width:800, marginTop: 30}}>
                    <div class="row no-gutters">
                    <div class="col-md-5">
                        <div id={"id" + node.frontmatter.id} class="carousel slide carousel-fade" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target={"#id" + node.frontmatter.id} data-slide-to="0" class="active"></li>
                            <li data-target={"#id" + node.frontmatter.id} data-slide-to="1"></li>
                            <li data-target={"#id" + node.frontmatter.id} data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                            <Img fluid={node.frontmatter.image1.childImageSharp.fluid} class="card-img d-block w-100"/>                      
                            </div>
                            <div class="carousel-item">
                            <Img fluid={node.frontmatter.image2.childImageSharp.fluid} class="card-img d-block w-100" />                                            
                            </div>
                            <div class="carousel-item">
                            <Img fluid={node.frontmatter.image3.childImageSharp.fluid} class="card-img d-block w-100" />                      
                            </div>
                        </div>
                        <a class="carousel-control-prev" href={"#id" + node.frontmatter.id} role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href={"#id" + node.frontmatter.id} role="button" data-slide="next" >                  
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="price text-center pt-5">
                            <p style={{fontSize: "50px"}}>{node.frontmatter.price + " €"}</p>
                            <input type="number" value="0" min="0" max="1000" step="1"/>
                            <a href="#" class="btn btn-lg btn-danger">Acheter <span class="glyphicon glyphicon-euro"></span></a>
                        </div>
                        
                    </div>
                    <div class="col-md-5">
                    <div class="card-body">
                        <Link to={"blog/" + node.fields.slug} key={i} className="link" >
                            <h5 class="card-title text-center">{node.frontmatter.title} {node.frontmatter.id}</h5>
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
            description
            id
            price
            image1 {
              childImageSharp {
                  fluid(maxWidth: 1500, maxHeight: 1500 ) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
            image2 {
              childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1000 ) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
            image3 {
              childImageSharp {
                  fluid(maxWidth: 1000, maxHeight: 1000 ) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
          }
        }
      }
    }
  }
`
