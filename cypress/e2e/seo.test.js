/// <reference types="Cypress" />

describe("Seo tests", () => {
  const siteTitle = "MG"
  const twitter = "@gorzelinski"
  const shouldHaveTags = ({ h1, title, description, url, type }) => {
    cy.findByRole("heading", {
      name: h1,
      level: 1,
      exact: false,
    }).should("be.visible")

    cy.get("html").should("have.prop", "lang", "en")
    cy.title().should("contain", title).and("contain", siteTitle)
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
  it("Visits home page and checks important seo tags", () => {
    const mock = {
      url: "https://gorzelinski.com",
      title: "I create things on the Internet",
      description: "Here will be the website description",
      type: "website",
      h1: /create/i,
    }
    cy.visit("/")
    shouldHaveTags(mock)
  })
  it("Visits portfolio page and checks important seo tags", () => {
    const mock = {
      url: "https://gorzelinski.com/portfolio/",
      title: "Portfolio",
      description: "Here will be the portfolio description",
      type: "website",
      h1: /portfolio/i,
    }
    cy.visit("/portfolio/")
    shouldHaveTags(mock)
  })
  it("Visits portfolio project and checks important seo tags", () => {
    const mock = {
      url: "https://gorzelinski.com/portfolio/an-lam/",
      title: "An-lam",
      description: "An-lam is a small",
      type: "article",
      h1: /an-lam/i,
    }
    cy.visit("/portfolio/an-lam/")
    shouldHaveTags(mock)
  })
  it("Visits about me page and checks important seo tags", () => {
    const mock = {
      url: "https://gorzelinski.com/about/",
      title: "About",
      description: "Here will be about description",
      type: "website",
      h1: /short story/i,
    }
    cy.visit("/about/")
    shouldHaveTags(mock)
  })
  it("Visits blog page and checks important seo tags", () => {
    const mock = {
      url: "https://gorzelinski.com/blog/",
      title: "Blog",
      description: "Here will be the blog description",
      type: "website",
      h1: /blog/i,
    }
    cy.visit("/blog/")
    shouldHaveTags(mock)
  })
  it("Visits blog post and checks important seo tags", () => {
    const mock = {
      url: "https://gorzelinski.com/blog/hello-world/",
      title: "Hello... world?",
      description: "What am I actually",
      type: "article",
      h1: /hello... world?/i,
    }
    cy.visit("/blog/hello-world/")
    shouldHaveTags(mock)
  })
})
