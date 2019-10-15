import React from "react"
import { graphql } from "gatsby"
import Article from "../components/articles/articles"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    return (
      <Article>
        <h1 class="text-center">{post.frontmatter.name}</h1>
        <div class="d-flex p-3 bg-secondary lign-content-start flex-wrap justify-content-around">
            <div class="card mb-3" style={{maxWidth: 800, width:800, marginTop: 30}}>
                <div class="row no-gutters">
                    <div class="col-md-6">
                       <img src={post.frontmatter.gallery} alt="" />
                    </div>
                    <div class="col-md-6 text-center">
                        <h5 class="card-title text-center mt-4" style={{fontSize: "30px"}}>{post.frontmatter.name}</h5>
                        <h5 class="card-title text-center" style={{fontSize: "25px"}}>{post.frontmatter.title}</h5>
                        <p class="mt-5 mb-5" style={{fontSize: "50px"}}>{post.frontmatter.price + " €"}</p>
                        <button class="btn btn-lg btn-danger">Acheter <span class="glyphicon glyphicon-euro"></span></button>
                    </div>
                    <div class="col-md-12 text-center" style={{fontSize: "22px"}}>
                    <p>{post.frontmatter.description}</p>
                        <div class="card-body">
                            <div class={"text"} style={{fontSize: "20px"}} dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Article>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
query PostQuery($slug: String!) {
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
