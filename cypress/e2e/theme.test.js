/// <reference types="Cypress" />

describe("Theme tests", () => {
  const checkLightTheme = () => {
    cy.findByTestId("sun-and-moon")
      .scrollIntoView({
        easing: "linear",
        duration: 300,
        offset: { top: -150 },
      })
      .should("be.visible")
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
    cy.findByTestId("sun-and-moon")
      .scrollIntoView({
        easing: "linear",
        duration: 300,
        offset: { top: -150 },
      })
      .should("be.visible")
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      "rgb(14, 15, 16)"
    )
    cy.findAllByRole("heading")
      .first()
      .should("have.css", "color", "rgb(255, 255, 255)")
  }
  before(() => {
    window.localStorage.setItem("theme", JSON.stringify("light"))
  })
  it("Visits home page and tests themes", () => {
    cy.visit("/")
    checkLightTheme()
    cy.findByLabelText(/change theme/i)
      .scrollIntoView({
        easing: "linear",
        duration: 300,
        offset: { top: -150 },
      })
      .click()
    checkDarkTheme()
    cy.reload()
    checkDarkTheme()
  })
})
