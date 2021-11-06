/// <reference types="Cypress" />

describe("Theme tests", () => {
  const checkLightTheme = () => {
    cy.findByTestId("moon").should("be.visible")
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      "rgb(255, 255, 255)"
    )
    cy.findAllByRole("heading")
      .first()
      .should("have.css", "color", "rgb(0, 0, 0)")
  }
  const checkDarkTheme = () => {
    cy.findByTestId("sunny").should("be.visible")
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      "rgb(17, 19, 21)"
    )
    cy.findAllByRole("heading")
      .first()
      .should("have.css", "color", "rgb(255, 255, 255)")
  }
  it("Visits home page and tests themes", () => {
    cy.visit("/")
    checkLightTheme()
    cy.findByRole("button", { name: /motyw/i, exact: false }).click()
    checkDarkTheme()
    cy.reload()
    checkDarkTheme()
  })
})
