import { graphql, useStaticQuery } from "gatsby"

export const useBlogPosts = () => {
  const posts = useStaticQuery(graphql`
    query BlogPosts {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/(blog)/" } }
        limit: 4
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY", locale: "pl")
            title
            description
            image {
              alt
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  `)
  return { posts }
}
