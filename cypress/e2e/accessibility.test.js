/// <reference types="Cypress" />

const pages = [
  "/",
  "/portfolio/",
  "/portfolio/an-lam/",
  "/about/",
  "/uses/",
  "/blog/",
  "/blog/hello-world/",
]

describe("Accessibility tests", () => {
  afterEach(() => {
    cy.checkA11y()
    cy.findByLabelText(/change theme/i).click()
    cy.checkA11y()
  })
  pages.forEach(page => {
    it(`Visits ${page} and checks for accessibility violations`, () => {
      cy.visit(page).get("main").injectAxe()
    })
  })
})
