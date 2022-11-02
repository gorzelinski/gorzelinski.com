/// <reference types="Cypress" />
import pages from "../fixtures/pages.json"
import { icon } from "../fixtures/theme.json"

describe("Seo tests", () => {
  const siteTitle = "Matthew Gorzelinski"
  let twitter

  before(() => {
    cy.fixture("contact").then(({ socials }) => {
      const handler = socials.find(social => social.name === "Twitter").handler
      twitter = `@${handler}`
    })
  })

  const shouldHaveTags = ({ heading, title, description, url, type }) => {
    cy.findByRole("heading", {
      name: new RegExp(heading, "i"),
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
      cy.findByTestId(icon).should("exist")

      shouldHaveTags(page)
    })
  })
})
