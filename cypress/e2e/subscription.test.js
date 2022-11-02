/// <reference types="Cypress" />
import { icon } from "../fixtures/theme.json"
import { form, user } from "../fixtures/subscription.json"

describe("Subscription tests", () => {
  it("Tests whole sign up flow", () => {
    cy.visit("/blog/hello-world/")
    cy.findByTestId(icon).should("exist")

    cy.findByPlaceholderText(form.email)
      .as("email")
      .should("have.prop", "type", "email")
      .and("have.prop", "required")
    cy.findByRole("button", { name: form.button }).as("button").click()
    cy.get("input:invalid").should("have.length", 1)

    cy.get("@email").type("wrong email")
    cy.get("input:invalid").should("have.length", 1)
    cy.get("@email").clear()

    cy.intercept("https://app.convertkit.com/**", req => {
      req.destroy()
    })
    cy.get("@email").type(user.email, { delay: 50 })
    cy.get("@button").click()
    cy.findByText(form.error, { exact: false }).should("be.visible")
    cy.get("@email").clear()

    cy.intercept("https://app.convertkit.com/**", req => {
      expect(req.body).to.include("email_address")
      expect(req.body).to.include(user.email)
      req.reply({
        statusCode: 200,
        body: {
          status: "success",
        },
      })
    })
    cy.get("@email").type(user.email, { delay: 50 })
    cy.get("@button").click()
    cy.findByText(form.success, { exact: false }).should("be.visible")
  })
})
