/// <reference types="Cypress" />

const light = {
  backgroundColor: "rgb(255, 255, 255)",
  text: "rgb(0, 0, 0)",
}

const dark = {
  backgroundColor: "rgb(14, 15, 16)",
  text: "rgb(255, 255, 255)",
}

describe("Theme tests", () => {
  const checkLightTheme = () => {
    cy.findByTestId("sun-and-moon").should("exist")
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      light.backgroundColor
    )
    cy.findAllByRole("heading").first().should("have.css", "color", light.text)
  }
  const checkDarkTheme = () => {
    cy.findByTestId("sun-and-moon").should("exist")
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      dark.backgroundColor
    )
    cy.findAllByRole("heading").first().should("have.css", "color", dark.text)
  }

  it("Visits home page and tests themes", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.stub(win, "matchMedia")
          .withArgs("(prefers-color-scheme: dark)")
          .returns({ matches: true })
      },
    })
    checkDarkTheme()
    cy.findByLabelText(/change theme/i)
      .scrollIntoView({
        easing: "linear",
        duration: 300,
        offset: { top: -150 },
      })
      .click()
    checkLightTheme()
    cy.reload()
    checkLightTheme()
  })
})
