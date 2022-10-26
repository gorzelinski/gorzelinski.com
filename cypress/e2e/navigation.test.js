/// <reference types="Cypress" />
import allPages from "../fixtures/pages.json"
import { socials, email } from "../fixtures/contact.json"

describe("Navigation tests", () => {
  const exclude = ["/blog/hello-world/", "/portfolio/an-lam/"]
  const pages = allPages.filter(
    page => !exclude.some(slug => slug === page.slug)
  )

  beforeEach(() => {
    cy.visit("/")
  })

  it("Navigates around the pages", () => {
    pages.forEach(page => {
      cy.findAllByRole("link", { name: page.button })
        .filter(`a[href="${page.slug}"]`)
        .first()
        .scrollIntoView({
          easing: "linear",
          duration: 300,
          offset: { top: -150 },
        })
        .should("be.visible")
        .click()
      cy.findByRole("heading", { level: 1 }).should(
        "contain.text",
        page.heading
      )
      cy.url().should("contain", page.slug)
    })
  })

  it("Navigates around contact methods", () => {
    cy.findAllByRole("link", { name: "Contact" })
      .first()
      .scrollIntoView({
        easing: "linear",
        duration: 300,
        offset: { top: -150 },
      })
      .click()
    cy.url().should("contain", "#contact")
    cy.findByRole("link", { name: email }).should(
      "have.prop",
      "href",
      `mailto:${email}`
    )
    cy.findByRole("link", { name: /get in touch/i }).should(
      "have.prop",
      "href",
      `mailto:${email}`
    )

    socials.forEach(social => {
      cy.findAllByRole("link", { name: social.name })
        .should("have.prop", "href")
        .and("contain", social.url)
        .and("contain", social.handler)
    })
  })
})
