import { image } from "./image"

export const projects = [
  {
    excerpt: "Default excerpt",
    fields: {
      slug: "/default-slug/",
    },
    frontmatter: {
      type: "project",
      description: "Default description",
      services: ["Default roles"],
      title: "Default title",
      image: {
        alt: "Default alt text",
        src: {
          ...image.image,
        },
      },
    },
  },
  {
    excerpt: "Default excerpt 2",
    fields: {
      slug: "/default-slug-2/",
    },
    frontmatter: {
      type: "project",
      description: "Default description 2",
      services: ["Default roles 2"],
      title: "Default title 2",
      image: {
        alt: "Default alt",
        src: {
          ...image.image,
        },
      },
    },
  },
]

export const project = {
  excerpt: "Default excerpt",
  fields: {
    slug: "/default/",
  },
  frontmatter: {
    client: "Default client",
    date: "2021-05-01T22:12:03.284Z",
    description: "Default description",
    title: "Default title",
    services: ["Default services"],
    tools: ["Default tools"],
    links: ["https://default.com/"],
    image: {
      alt: "Default alt text",
      src: {
        ...image.image,
      },
    },
  },
}

export const projectPartial = {
  ...project,
  frontmatter: {
    title: "default title",
    description: "default description",
  },
}
