/// <reference types="Cypress" />

const staticString = "I create things on the Internet"

describe("Reduced motion tests", () => {
  it("Visits home page and checks reduced motion setting", () => {
    cy.visit("/", {
      onBeforeLoad(win) {
        cy.stub(win, "matchMedia")
          .withArgs("(prefers-color-scheme: dark)")
          .returns({ matches: true, addEventListener: () => {} })
          .withArgs("(prefers-reduced-motion: reduce)")
          .returns({ matches: true, addEventListener: () => {} })
      },
    })

    cy.findByRole("heading", { level: 1, timeout: 2000 }).should(
      "have.text",
      staticString
    )
  })
})
