/// <reference types="Cypress" />
import { light, dark, icon } from "../fixtures/theme.json"

describe("Theme tests", () => {
  const checkLightTheme = () => {
    cy.findByTestId(icon).should("exist")
    cy.findByTestId("background").should(
      "have.css",
      "background-color",
      light.backgroundColor
    )
    cy.findAllByRole("heading").first().should("have.css", "color", light.text)
  }

  const checkDarkTheme = () => {
    cy.findByTestId(icon).should("exist")
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
          .returns({ matches: true, addEventListener: () => {} })
          .withArgs("(prefers-reduced-motion: reduce)")
          .returns({ matches: false, addEventListener: () => {} })
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
