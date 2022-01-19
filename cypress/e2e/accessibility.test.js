/// <reference types="Cypress" />

describe("Accessibility tests", () => {
  afterEach(() => {
    cy.checkA11y()
    cy.findByLabelText(/change theme/i).click()
    cy.checkA11y()
  })
  it("Has no detectable accessibility violations on load", () => {
    cy.visit("/").get("main").injectAxe()
  })
  it("Visits portfolio page and checks for accessibility violations", () => {
    cy.visit("/portfolio").get("main").injectAxe()
  })
  it("Visits portfolio project page and checks for accessibility violations", () => {
    cy.visit("/portfolio/an-lam").get("main").injectAxe()
  })
  it("Visits about me page and checks for accessibility violations", () => {
    cy.visit("/about").get("main").injectAxe()
  })
  it("Visits blog page and checks for accessibility violations", () => {
    cy.visit("/blog").get("main").injectAxe()
  })
  it("Visits blog post page and checks for accessibility violations", () => {
    cy.visit("/blog/hello-world").get("main").injectAxe()
  })
})
