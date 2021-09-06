import { useStaticQuery, graphql } from "gatsby"

export const useBio = () => {
  const bio = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            email
            github
            dribbble
            twitter
            facebook
          }
        }
      }
      image: file(relativePath: { eq: "gorzelinski.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  return { bio }
}
