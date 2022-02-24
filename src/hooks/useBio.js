import { useStaticQuery, graphql } from "gatsby"

export const useBio = () => {
  const bio = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          siteUrl
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
            linkedin
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
