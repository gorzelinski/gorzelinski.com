/// <reference types="Cypress" />
const pages = [
  {
    slug: "/",
    url: "https://gorzelinski.com",
    title: "Matthew Gorzelinski",
    description: "things on the Internet",
    type: "website",
    h1: /create/i,
  },
  {
    slug: "/portfolio/",
    url: "https://gorzelinski.com/portfolio/",
    title: "Portfolio",
    description: "websites",
    type: "website",
    h1: /portfolio/i,
  },
  {
    slug: "/portfolio/an-lam/",
    url: "https://gorzelinski.com/portfolio/an-lam/",
    title: "An-lam",
    description: "An-lam",
    type: "article",
    h1: /an-lam/i,
  },
  {
    slug: "/about/",
    url: "https://gorzelinski.com/about/",
    title: "About",
    description: "Matthew",
    type: "website",
    h1: /short story/i,
  },
  {
    slug: "/uses/",
    url: "https://gorzelinski.com/uses/",
    title: "Stuff I use",
    description: "specifics",
    type: "website",
    h1: /stuff/i,
  },
  {
    slug: "/blog/",
    url: "https://gorzelinski.com/blog/",
    title: "Blog",
    description: "web development",
    type: "website",
    h1: /blog/i,
  },
  {
    slug: "/blog/hello-world/",
    url: "https://gorzelinski.com/blog/hello-world/",
    title: "Hello... world?",
    description: "What am I actually",
    type: "article",
    h1: /hello... world?/i,
  },
]

describe("Seo tests", () => {
  const siteTitle = "Gorzelinski"
  const twitter = "@gorzelinski"
  const shouldHaveTags = ({ h1, title, description, url, type }) => {
    cy.findByRole("heading", {
      name: h1,
      level: 1,
      exact: false,
    }).should("be.visible")

    cy.get("html").should("have.prop", "lang", "en")
    cy.title().should("contain", title)
    cy.get('meta[name="description"]')
      .should("have.prop", "content")
      .and("contain", description)

    cy.get('meta[property="og:site_name"]')
      .should("have.prop", "content")
      .and("contain", siteTitle)
    cy.get('meta[property="og:url"]').should("have.prop", "content", url)
    cy.get('meta[property="og:type"]').should("have.prop", "content", type)
    cy.get('meta[property="og:title"]')
      .should("have.prop", "content")
      .and("contain", title)
    cy.get('meta[property="og:description"]')
      .should("have.prop", "content")
      .and("contain", description)
    cy.get('meta[property="og:image"]')
      .should("have.prop", "content")
      .and("be.ok")
    cy.get('meta[property="og:image:alt"]')
      .should("have.prop", "content")
      .and("be.ok")
    cy.get('meta[property="og:image:width"]')
      .should("have.prop", "content")
      .and("be.ok")
    cy.get('meta[property="og:image:height"]')
      .should("have.prop", "content")
      .and("be.ok")

    cy.get('meta[name="twitter:url"]').should("have.prop", "content", url)
    cy.get('meta[name="twitter:site"]').should("have.prop", "content", twitter)
    cy.get('meta[name="twitter:creator"]').should(
      "have.prop",
      "content",
      twitter
    )
    cy.get('meta[name="twitter:title"]')
      .should("have.prop", "content")
      .and("contain", title)
    cy.get('meta[name="twitter:description"]')
      .should("have.prop", "content")
      .and("contain", description)
    cy.get('meta[name="twitter:card"]').should(
      "have.prop",
      "content",
      "summary_large_image"
    )
    cy.get('meta[name="twitter:image"]')
      .should("have.prop", "content")
      .and("be.ok")
    cy.get('meta[name="twitter:image:alt"]')
      .should("have.prop", "content")
      .and("be.ok")
  }

  pages.forEach(page => {
    it(`Visits ${page.slug} and checks important seo tags`, () => {
      cy.visit(page.slug)
      shouldHaveTags(page)
    })
  })
})
