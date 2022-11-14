import { image } from "./image"

export const posts = [
  {
    excerpt: "Default excerpt",
    fields: {
      slug: "/default-slug/",
    },
    frontmatter: {
      type: "post",
      date: "May 1, 2022",
      title: "Default title",
      description: "Default description",
      image: {
        alt: "Default alt text",
        src: {
          ...image.image,
        },
      },
    },
    timeToRead: 4,
  },
  {
    excerpt: "Default excerpt 2",
    fields: {
      slug: "/default-slug-2/",
    },
    frontmatter: {
      type: "post",
      date: "May 2, 2022",
      title: "Default title 2",
      description: "Default description 2",
      image: {
        alt: "Default alt text",
        src: {
          ...image.image,
        },
      },
    },
    timeToRead: 4,
  },
  {
    excerpt: "Default excerpt 3",
    fields: {
      slug: "/default-slug-3/",
    },
    frontmatter: {
      type: "post",
      date: "May 3, 2022",
      title: "Default title 3",
      description: "Default description 3",
      image: {
        alt: "Default alt text",
        src: {
          ...image.image,
        },
      },
    },
    timeToRead: 1,
  },
  {
    excerpt: "Default excerpt 4",
    fields: {
      slug: "/default-slug-4/",
    },
    frontmatter: {
      type: "post",
      date: "May 4, 2022",
      title: "Default title 4",
      description: "Default description 4",
      image: {
        alt: "Default alt text",
        src: {
          ...image.image,
        },
      },
    },
    timeToRead: 3,
  },
]

export const post = {
  excerpt: "Default excerpt",
  fields: {
    slug: "/default/",
  },
  frontmatter: {
    date: "2021-05-01T22:12:03.284Z",
    description: "Default description",
    title: "Default title",
    image: {
      alt: "Default alt text",
      src: {
        ...image.image,
      },
    },
  },
  timeToRead: 5,
}

export const postPartial = {
  ...post,
  frontmatter: {
    title: "default title",
    description: "default description",
  },
}
