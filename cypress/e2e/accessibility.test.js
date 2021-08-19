/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/").get("main").injectAxe()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y()
  })
  it("Navigates to blog post and checks for accessibility violations", () => {
    cy.findByText(/new beginnings/i)
      .click()
      .checkA11y()
  })
})
