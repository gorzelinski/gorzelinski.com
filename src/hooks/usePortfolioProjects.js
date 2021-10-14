import { graphql, useStaticQuery } from "gatsby"

export const usePortfolioProjects = () => {
  const projects = useStaticQuery(graphql`
    query PortfolioProjects {
      allMdx(
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
            image {
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
