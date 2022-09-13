const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const createPageSlugs = (items, index) => {
    const previous = index === 0 ? null : items[index - 1].fields.slug
    const next =
      index === items.length - 1 ? null : items[index + 1].fields.slug

    return { previous, next }
  }

  const customCreatePages = (items, createPageConfig) => {
    const { path, component } = createPageConfig

    items.forEach(({ nodes }) => {
      nodes.forEach((node, index) => {
        const { previous, next } = createPageSlugs(nodes, index)
        const categories = node?.frontmatter?.categories

        createPage({
          path: `${path}${node.fields.slug}`,
          component,
          context: {
            slug: node.fields.slug,
            previous,
            next,
            ...(categories && { categories }),
          },
        })
      })
    })
  }

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const portfolioProject = path.resolve(`./src/templates/portfolio-project.js`)

  const resultPosts = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { frontmatter: { type: { eq: "post" } } }
          limit: 1000
        ) {
          group(field: fields___locale) {
            nodes {
              fields {
                locale
                slug
              }
              frontmatter {
                categories
              }
            }
          }
        }
      }
    `
  )

  const resultProjects = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { frontmatter: { type: { eq: "project" } } }
          limit: 1000
        ) {
          group(field: fields___locale) {
            nodes {
              fields {
                locale
                slug
              }
            }
          }
        }
      }
    `
  )

  if (resultPosts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      resultPosts.errors
    )
    return
  }

  if (resultProjects.errors) {
    reporter.panicOnBuild(
      `There was an error loading your portfolio projects`,
      resultProjects.errors
    )
    return
  }

  const posts = resultPosts.data.allMdx.group
  const projects = resultProjects.data.allMdx.group

  if (posts.length > 0) {
    customCreatePages(posts, {
      path: "blog",
      component: blogPost,
    })
  }

  if (projects.length > 0) {
    customCreatePages(projects, {
      path: "portfolio",
      component: portfolioProject,
    })
  }
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = `/${path.basename(path.dirname(node.fileAbsolutePath))}/`

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Social {
      github: String
      twitter: String
      dribbble: String
      facebook: String
      instagram: String
      linkedin: String
    }
    
    type Author {
      name: String
      summary: String
      email: String
      social: Social
    }

    type SiteSiteMetadata {
      author: Author
      siteUrl: String
    }    

    type BannerImage {
      alt: String
      caption: String
      src: File @fileByRelativePath
    }

    type Link {
      text: String
      href: String
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      updated: Date @dateformat
      image: BannerImage
      client: String
      categories: [String]
      tags: [String]
      services: [String]
      deliverables: [String]
      links: [Link]
    }

    type Fields {
      slug: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
  `)
}
