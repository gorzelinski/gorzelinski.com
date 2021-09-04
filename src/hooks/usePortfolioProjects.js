import { graphql, useStaticQuery } from "gatsby"

export const usePortfolioProjects = () => {
  const projects = useStaticQuery(graphql`
    query PortfolioProjects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
        limit: 4
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            client
            date
            description
            myRole
            title
            tools
            live
            featuredImage {
              alt
              src {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)
  return { projects }
}
