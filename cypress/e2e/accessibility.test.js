/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  it("Has no detectable accessibility violations on load", () => {
    cy.visit("/").get("main").injectAxe()
    cy.checkA11y()
    cy.findByRole("button", { name: /motyw/i, exact: false }).click()
    cy.checkA11y()
  })
  it("Visits portfolio page and checks for accessibility violations", () => {
    cy.visit("/portfolio").get("main").injectAxe()
    cy.checkA11y()
    cy.findByRole("button", { name: /motyw/i, exact: false }).click()
    cy.checkA11y()
  })
  it("Visits portfolio project page and checks for accessibility violations", () => {
    cy.visit("/portfolio/an-lam").get("main").injectAxe()
    cy.checkA11y()
    cy.findByRole("button", { name: /motyw/i, exact: false }).click()
    cy.checkA11y()
  })
  it("Visits about me page and checks for accessibility violations", () => {
    cy.visit("/o-mnie").get("main").injectAxe()
    cy.checkA11y()
    cy.findByRole("button", { name: /motyw/i, exact: false }).click()
    cy.checkA11y()
  })
  it("Visits blog page and checks for accessibility violations", () => {
    cy.visit("/blog").get("main").injectAxe()
    cy.checkA11y()
    cy.findByRole("button", { name: /motyw/i, exact: false }).click()
    cy.checkA11y()
  })
  it("Visits blog post page and checks for accessibility violations", () => {
    cy.visit("/blog/hello-world").get("main").injectAxe()
    cy.checkA11y()
    cy.findByRole("button", { name: /motyw/i, exact: false }).click()
    cy.checkA11y()
  })
})
