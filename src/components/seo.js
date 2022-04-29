import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { useBio } from "../hooks/useBio"

const Seo = ({
  description,
  image,
  lang,
  meta,
  slug,
  title,
  titleTemplate,
  type,
}) => {
  const {
    bio: { site },
  } = useBio()

  const url = `${site.siteMetadata.siteUrl}${slug}`
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaImage = image ? `${site.siteMetadata.siteUrl}${image.src}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={titleTemplate ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: "og:site_name",
          content: defaultTitle,
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: "twitter:url",
          content: url,
        },
        {
          name: `twitter:site`,
          content: `@${site.siteMetadata?.author?.social?.twitter}`,
        },
        {
          name: `twitter:creator`,
          content: `@${site.siteMetadata?.author?.social?.twitter}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: metaImage,
                },
                { property: "og:image:alt", content: image.alt },
                {
                  property: "og:image:width",
                  content: image.width,
                },
                {
                  property: "og:image:height",
                  content: image.height,
                },
                {
                  name: `twitter:card`,
                  content: `summary_large_image`,
                },
                {
                  name: "twitter:image",
                  content: metaImage,
                },
                {
                  name: "twitter:image:alt",
                  content: image.alt,
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  type: `website`,
  slug: ``,
  titleTemplate: false,
}

Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.object,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleTemplate: PropTypes.bool,
  type: PropTypes.string,
}

export default Seo
