const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const portfolioProject = path.resolve(`./src/templates/portfolio-project.js`)

  // Get all markdown blog posts sorted by date
  const resultPosts = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: ASC }
          filter: { fileAbsolutePath: { regex: "/(blog)/" } }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
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
          filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
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

  const posts = resultPosts.data.allMdx.nodes
  const projects = resultProjects.data.allMdx.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `blog${post.fields.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  if (projects.length > 0) {
    projects.forEach((project, index) => {
      const previousProjectId = index === 0 ? null : projects[index - 1].id
      const nextProjectId =
        index === projects.length - 1 ? null : projects[index + 1].id

      createPage({
        path: `portfolio${project.fields.slug}`,
        component: portfolioProject,
        context: {
          id: project.id,
          previousProjectId,
          nextProjectId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  //TODO: Define project frontmatter fields
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      email: String
      github: String
      dribbble: String
      twitter: String
      facebook: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type MetaImage {
      alt: String
      src: ImageSharp
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      image: MetaImage
    }

    type Fields {
      slug: String
    }
  `)
}
