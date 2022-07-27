const React = require("react")
const gatsby = jest.requireActual("gatsby")

const siteMetaData = {
  title: "siteTitle",
  author: {
    name: "authorsName",
    email: "authorsEmail",
    social: {
      github: "authorsGithub",
      dribbble: "authorsDribbble",
      twitter: "authorsTwitter",
      facebook: "authorsFacebook",
      instagram: "authorsInstagram",
    },
  },
}

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementation(() => ({
    site: {
      siteMetadata: {
        ...siteMetaData,
      },
    },
    themeI18N: {
      defaultLang: "en",
      config: [
        {
          code: "en",
          hrefLang: "en-US",
          name: "English",
          localName: "English",
          langDir: "ltr",
          dateFormat: "MMMM DD, YYYY",
        },
        {
          code: "pl",
          hrefLang: "pl-PL",
          name: "Polish",
          localName: "Polski",
          langDir: "ltr",
          dateFormat: "DD MMMM, YYYY",
        },
      ],
    },
  })),
}
