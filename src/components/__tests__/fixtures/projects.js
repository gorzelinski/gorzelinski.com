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
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained",
              backgroundColor: "#0868c8",
              images: {
                fallback: {
                  src: "/static/ea672a9ab189f45e297b00a559bb3962/b8e2d/gorzelinski-thumbnail.png",
                  srcSet:
                    "/static/ea672a9ab189f45e297b00a559bb3962/9a63f/gorzelinski-thumbnail.png 640w,\n/static/ea672a9ab189f45e297b00a559bb3962/87706/gorzelinski-thumbnail.png 1280w,\n/static/ea672a9ab189f45e297b00a559bb3962/b8e2d/gorzelinski-thumbnail.png 2560w",
                  sizes: "(min-width: 2560px) 2560px, 100vw",
                },
                sources: [
                  {
                    srcSet:
                      "/static/ea672a9ab189f45e297b00a559bb3962/17574/gorzelinski-thumbnail.webp 640w,\n/static/ea672a9ab189f45e297b00a559bb3962/71d4d/gorzelinski-thumbnail.webp 1280w,\n/static/ea672a9ab189f45e297b00a559bb3962/c87c1/gorzelinski-thumbnail.webp 2560w",
                    type: "image/webp",
                    sizes: "(min-width: 2560px) 2560px, 100vw",
                  },
                ],
              },
              width: 2560,
              height: 1440,
            },
          },
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
          childImageSharp: {
            gatsbyImageData: {
              layout: "constrained",
              backgroundColor: "#f8f8f8",
              images: {
                fallback: {
                  src: "/static/a981da887b6696cf7653715c9fb44557/7659a/an-lam-thumbnail.png",
                  srcSet:
                    "/static/a981da887b6696cf7653715c9fb44557/0abbd/an-lam-thumbnail.png 840w,\n/static/a981da887b6696cf7653715c9fb44557/50d48/an-lam-thumbnail.png 1680w,\n/static/a981da887b6696cf7653715c9fb44557/7659a/an-lam-thumbnail.png 3360w",
                  sizes: "(min-width: 3360px) 3360px, 100vw",
                },
                sources: [
                  {
                    srcSet:
                      "/static/a981da887b6696cf7653715c9fb44557/a0d53/an-lam-thumbnail.webp 840w,\n/static/a981da887b6696cf7653715c9fb44557/2f6d3/an-lam-thumbnail.webp 1680w,\n/static/a981da887b6696cf7653715c9fb44557/2d2bf/an-lam-thumbnail.webp 3360w",
                    type: "image/webp",
                    sizes: "(min-width: 3360px) 3360px, 100vw",
                  },
                ],
              },
              width: 3360,
              height: 1440,
            },
          },
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
        childImageSharp: {
          gatsbyImageData: {
            layout: "constrained",
            backgroundColor: "#f8f8f8",
            images: {
              fallback: {
                src: "/static/a981da887b6696cf7653715c9fb44557/7659a/an-lam-thumbnail.png",
                srcSet:
                  "/static/a981da887b6696cf7653715c9fb44557/0abbd/an-lam-thumbnail.png 840w,\n/static/a981da887b6696cf7653715c9fb44557/50d48/an-lam-thumbnail.png 1680w,\n/static/a981da887b6696cf7653715c9fb44557/7659a/an-lam-thumbnail.png 3360w",
                sizes: "(min-width: 3360px) 3360px, 100vw",
              },
              sources: [
                {
                  srcSet:
                    "/static/a981da887b6696cf7653715c9fb44557/a0d53/an-lam-thumbnail.webp 840w,\n/static/a981da887b6696cf7653715c9fb44557/2f6d3/an-lam-thumbnail.webp 1680w,\n/static/a981da887b6696cf7653715c9fb44557/2d2bf/an-lam-thumbnail.webp 3360w",
                  type: "image/webp",
                  sizes: "(min-width: 3360px) 3360px, 100vw",
                },
              ],
            },
            width: 3360,
            height: 1440,
          },
        },
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
