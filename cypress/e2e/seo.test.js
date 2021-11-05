/// <reference types="Cypress" />

const siteTitle = "Gorzeliński"
const twitter = "@gorzelinski"

describe("Seo tests", () => {
  it("Visits home page and checks important seo tags", () => {
    const url = "https://gorzelinski.com"
    const title = "Tworzę rzeczy w internecie"
    const description = "A starter blog demonstrating what Gatsby can do."
    const type = "website"

    cy.visit("/")

    cy.findByRole("heading", { name: /rzeczy w internecie/i, level: 1 }).should(
      "be.visible"
    )

    cy.title().should("contain", title).and("contain", siteTitle)
    cy.get('meta[name="description"]').should(
      "have.prop",
      "content",
      description
    )

    cy.get('meta[property="og:site_name"]')
      .should("have.prop", "content")
      .and("contain", siteTitle)
    cy.get('meta[property="og:url"]').should("have.prop", "content", url)
    cy.get('meta[property="og:type"]').should("have.prop", "content", type)
    cy.get('meta[property="og:title"]').should("have.prop", "content", title)
    cy.get('meta[property="og:description"]').should(
      "have.prop",
      "content",
      description
    )
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
    cy.get('meta[name="twitter:title"]').should("have.prop", "content", title)
    cy.get('meta[name="twitter:description"]').should(
      "have.prop",
      "content",
      description
    )
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
  })
  it("Visits portfolio page and checks important seo tags", () => {
    const url = "https://gorzelinski.com/portfolio"
    const title = "Portfolio"
    const description = "Tu będzie opis portfolio"
    const type = "website"

    cy.visit("/portfolio")

    cy.findByRole("heading", { name: /portfolio/i, level: 1 }).should(
      "be.visible"
    )

    cy.title().should("contain", title).and("contain", siteTitle)
    cy.get('meta[name="description"]').should(
      "have.prop",
      "content",
      description
    )

    cy.get('meta[property="og:site_name"]')
      .should("have.prop", "content")
      .and("contain", siteTitle)
    cy.get('meta[property="og:url"]').should("have.prop", "content", url)
    cy.get('meta[property="og:type"]').should("have.prop", "content", type)
    cy.get('meta[property="og:title"]').should("have.prop", "content", title)
    cy.get('meta[property="og:description"]').should(
      "have.prop",
      "content",
      description
    )
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
    cy.get('meta[name="twitter:title"]').should("have.prop", "content", title)
    cy.get('meta[name="twitter:description"]').should(
      "have.prop",
      "content",
      description
    )
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
  })
  it("Visits portfolio project and checks important seo tags", () => {
    const url = "https://gorzelinski.com/portfolio/an-lam"
    const title = "An-lam"
    const description = "An-lam to mała, lokalna"
    const type = "article"

    cy.visit("/portfolio/an-lam")

    cy.findByRole("heading", {
      name: /an-lam/i,
      level: 1,
      exact: false,
    }).should("be.visible")

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
  })
  it("Visits about me page and checks important seo tags", () => {
    const url = "https://gorzelinski.com/o-mnie"
    const title = "O mnie"
    const description = "Tu będzie opis o mnie"
    const type = "website"

    cy.visit("/o-mnie")

    cy.findByRole("heading", {
      name: /a oto moja krótka historia/i,
      level: 1,
    }).should("be.visible")

    cy.title().should("contain", title).and("contain", siteTitle)
    cy.get('meta[name="description"]').should(
      "have.prop",
      "content",
      description
    )

    cy.get('meta[property="og:site_name"]')
      .should("have.prop", "content")
      .and("contain", siteTitle)
    cy.get('meta[property="og:url"]').should("have.prop", "content", url)
    cy.get('meta[property="og:type"]').should("have.prop", "content", type)
    cy.get('meta[property="og:title"]').should("have.prop", "content", title)
    cy.get('meta[property="og:description"]').should(
      "have.prop",
      "content",
      description
    )
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
    cy.get('meta[name="twitter:title"]').should("have.prop", "content", title)
    cy.get('meta[name="twitter:description"]').should(
      "have.prop",
      "content",
      description
    )
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
  })
  it("Visits blog page and checks important seo tags", () => {
    const url = "https://gorzelinski.com/blog"
    const title = "Blog"
    const description = "Tu będzie opis bloga"
    const type = "website"

    cy.visit("/blog")

    cy.findByRole("heading", { name: /blog/i, level: 1 }).should("be.visible")

    cy.title().should("contain", title).and("contain", siteTitle)
    cy.get('meta[name="description"]').should(
      "have.prop",
      "content",
      description
    )

    cy.get('meta[property="og:site_name"]')
      .should("have.prop", "content")
      .and("contain", siteTitle)
    cy.get('meta[property="og:url"]').should("have.prop", "content", url)
    cy.get('meta[property="og:type"]').should("have.prop", "content", type)
    cy.get('meta[property="og:title"]').should("have.prop", "content", title)
    cy.get('meta[property="og:description"]').should(
      "have.prop",
      "content",
      description
    )
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
    cy.get('meta[name="twitter:title"]').should("have.prop", "content", title)
    cy.get('meta[name="twitter:description"]').should(
      "have.prop",
      "content",
      description
    )
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
  })
  it("Visits blog post and checks important seo tags", () => {
    const url = "https://gorzelinski.com/blog/hello-world"
    const title = "Hello... world?"
    const description = "Co ja właściwie"
    const type = "article"

    cy.visit("/blog/hello-world")

    cy.findByRole("heading", {
      name: /hello... world?/i,
      level: 1,
      exact: false,
    }).should("be.visible")

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
  })
})
