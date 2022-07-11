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
  beforeEach(() => {
    window.localStorage.setItem("theme", JSON.stringify("light"))
  })
  afterEach(() => {
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      "rgb(250, 250, 250)"
    )
    cy.checkA11y()
    cy.findByLabelText(/change theme/i).click()
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      "rgb(14, 15, 16)"
    )
    cy.checkA11y()
  })
  pages.forEach(page => {
    it(`Visits ${page} and checks for accessibility violations`, () => {
      cy.visit(page)
      cy.injectAxe()
    })
  })
})
