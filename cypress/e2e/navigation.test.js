/// <reference types="Cypress" />
import allPages from "../fixtures/pages.json"
import socials from "../fixtures/socials.json"
import { email } from "../fixtures/email.json"

describe("Navigation tests", () => {
  const pages = allPages.filter(page => page.slug !== "/blog/hello-world/")
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
      cy.findByRole("heading", { level: 1 }).should("be.ok")
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
