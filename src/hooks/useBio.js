import { useStaticQuery, graphql } from "gatsby"

export const useBio = () => {
  const bio = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          title
          author {
            name
            summary
            email
          }
          social {
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
