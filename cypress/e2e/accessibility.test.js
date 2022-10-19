/// <reference types="Cypress" />
import pages from "../fixtures/pages.json"
import { light, dark } from "../fixtures/theme.json"

describe("Accessibility tests", () => {
  beforeEach(() => {
    window.localStorage.setItem("theme", JSON.stringify("light"))
  })

  afterEach(() => {
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      light.backgroundColor
    )
    cy.checkA11y()
    cy.findByLabelText(/change theme/i).click()
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      dark.backgroundColor
    )
    cy.checkA11y()
  })

  pages.forEach(page => {
    it(`Visits ${page.slug} and checks for accessibility violations`, () => {
      cy.visit(page.slug)
      cy.injectAxe()
    })
  })
})
