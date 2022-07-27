module.exports = {
  siteMetadata: {
    siteUrl: `https://gorzelinski.com`,
    title: `Gorzelinski`,
    description: `I create things on the Internet.`,
    author: {
      name: `Matthew Gorzelinski`,
      summary: `Engineer with polymath aspirations.`,
      email: `hello@gorzelinski.com`,
      social: {
        github: `gorzelinski`,
        twitter: `gorzelinski`,
        dribbble: `gorzelinski`,
        facebook: `gorzelinski`,
        instagram: `gorzelinsky`,
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
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
          breakpoints: [750, 1080, 1366, 1920, 2560],
          backgroundColor: `transparent`,
          webpOptions: {
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
              backgroundColor: `transparent`,
              quality: 80,
              withWebp: { quality: 80 },
              maxWidth: 1440,
              srcSetBreakpoints: [720, 1080],
              linkImagesToOriginal: false,
              // showCaptions: [`title`],
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
            `pages/404`,
            `pages/about`,
            `pages/blog`,
            `pages/index`,
            `pages/preferences`,
            `pages/portfolio`,
            `pages/thank-you`,
            `pages/uses`,
            `templates/blog-post`,
            `templates/portfolio-project`,
            `components/bio`,
            `components/cards`,
            `components/contact`,
            `components/core-values`,
            `components/cultural-corner`,
            `components/footer`,
            `components/landing`,
            `components/my-tech`,
            `components/navbar`,
            `components/pagination`,
            `components/post`,
            `components/project`,
            `components/random-facts`,
            `components/subscribe`,
            `components/theme-switcher`,
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
        feeds: [
          {
            serialize: ({ query: { allMdx } }) => {
              return allMdx.nodes.map(node => {
                const url = `https://gorzelinski.com/${
                  node.frontmatter.client ? "portfolio" : "blog"
                }${node.fields.slug}`
                return Object.assign({}, node.frontmatter, {
                  author: `Matthew Gorzelinski`,
                  description: node.frontmatter.description,
                  date: node.frontmatter.date,
                  url,
                  guid: url,
                })
              })
            },
            query: `
            {
              allMdx(
                sort: {order: DESC, fields: [frontmatter___date]}
                filter: {fields: {locale: {eq: "en"}}}
              ) {
                nodes {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    description
                    client
                  }
                }
              }
            }            
            `,
            output: `/rss.xml`,
            title: `Matthew Gorzelinski's Blog`,
            description: `I design, code, write - for humans and machines. I help by creating things on the Internet.`,
            language: `en`,
            site_url: `https://gorzelinski.com`,
            feed_url: `https://gorzelinski.com/rss.xml`,
            image_url: `https://gorzelinski.com/logo.png`,
          },
          {
            serialize: ({ query: { allMdx } }) => {
              return allMdx.nodes.map(node => {
                const url = `https://gorzelinski.com/pl/${
                  node.frontmatter.client ? "portfolio" : "blog"
                }${node.fields.slug}`
                return Object.assign({}, node.frontmatter, {
                  author: `Mateusz Gorzeliński`,
                  description: node.frontmatter.description,
                  date: node.frontmatter.date,
                  url,
                  guid: url,
                })
              })
            },
            query: `
            {
              allMdx(
                sort: {order: DESC, fields: [frontmatter___date]}
                filter: {fields: {locale: {eq: "pl"}}}
              ) {
                nodes {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    description
                    client
                  }
                }
              }
            }            
            `,
            output: `/pl/rss.xml`,
            title: `Blog Mateusza Gorzelińskiego`,
            description: `Projektuję, koduję, piszę - dla ludzi i maszyn. Pomagam tworząc rzeczy w Internecie.`,
            language: `pl`,
            site_url: `https://gorzelinski.com/pl/`,
            feed_url: `https://gorzelinski.com/pl/rss.xml`,
            image_url: `https://gorzelinski.com/logo.png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: ["/thank-you/", "/preferences/", "/404.html", "/404/"],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          themeI18N {
            config {
              code
            }
          }
          allSitePage(sort: {fields: path}) {
            nodes {
              path
            }
          }
        }
        `,
        resolvePages: ({
          site: {
            siteMetadata: { siteUrl },
          },
          themeI18N: { config: languages },
          allSitePage: { nodes: pages },
        }) => {
          const defaultPages = pages
            .filter(
              page =>
                !languages.some(language =>
                  page.path.startsWith(`/${language.code}/`)
                )
            )
            .map(page => ({
              path: `${siteUrl}${page.path}`,
            }))

          // Code for a more complex sitemap with alternate links. I'm not sure which is better.
          // const allPages = pages.map(page => {
          //   const defaultPath = languages.some(language =>
          //     page.path.startsWith(`/${language.code}/`)
          //   )
          //     ? page.path.substring(3)
          //     : page.path

          //   return {
          //     path: `${siteUrl}${page.path}`,
          //     links: languages.map(language => ({
          //       lang: language.code,
          //       url: `${siteUrl}${
          //         language.code === "en" ? "" : "/" + language.code
          //       }${defaultPath}`,
          //     })),
          //   }
          // })

          return defaultPages
        },
        filterPages: (page, excludedPath) => page.path.includes(excludedPath),
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gorzelinski.com`,
        short_name: `Gorzelinski`,
        description: `I create things on the Internet.`,
        start_url: `/`,
        background_color: `#fafafa`,
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
    `gatsby-plugin-netlify`,
  ],
}
