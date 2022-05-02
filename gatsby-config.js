module.exports = {
  siteMetadata: {
    siteUrl: `https://gorzelinski.com/`,
    title: `Gorzelinski`,
    description: `I create things on the Internet.`,
    author: {
      name: `Matthew Gorzelinski`,
      summary: `Engineer with polymath aspirations.`,
      email: `hello@gorzelinski.com`,
      social: {
        github: `gorzelinski`,
        dribbble: `gorzelinski`,
        twitter: `gorzelinski`,
        facebook: `gorzelinski`,
        linkedin: `mateusz-gorzelinski`,
      },
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/portfolio`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [320, 480, 768, 1200],
          backgroundColor: `transparent`,
          webpOptions: {
            quality: 80,
          },
          avifOptions: {
            quality: 80,
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    // TODO: find a way to unwrap figure/img elements from p
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
              backgroundColor: `transparent`,
              quality: 80,
              withWebp: { quality: 80 },
              withAvif: { quality: 80 },
              srcSetBreakpoints: [720, 480, 320],
              showCaptions: [`title`],
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        configPath: require.resolve(`./content/i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-react-i18next`,
      options: {
        locales: `./content/i18n/react-i18next`,
        i18nextOptions: {
          ns: [
            "pages/404",
            "pages/about",
            "pages/blog",
            "pages/index",
            "pages/preferences",
            "pages/portfolio",
            "pages/thank-you",
            "templates/blog-post",
            "templates/portfolio-project",
            "components/bio",
            "components/cards",
            "components/contact",
            "components/footer",
            "components/landing",
            "components/navbar",
            "components/pagination",
            "components/post",
            "components/project",
            "components/subscribe",
            "components/theme-switcher",
          ],
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gorzeliński RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gorzelinski.com`,
        short_name: `Gorzelinski`,
        description: `I create things on the Internet.`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0466c8`,
        theme_color_in_head: false,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
        icon_options: {
          purpose: `any`,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
