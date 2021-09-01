import { graphql, useStaticQuery } from "gatsby"

export const usePortfolioProjects = () => {
  const projects = useStaticQuery(graphql`
    query PortfolioProjects {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
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
