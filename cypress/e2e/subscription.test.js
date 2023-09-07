/// <reference types="Cypress" />
import { icon } from "../fixtures/theme.json"
import { form, user } from "../fixtures/subscription.json"

describe("Subscription tests", () => {
  beforeEach(() => {
    cy.visit("/blog/hello-world/")
    cy.findByTestId(icon).should("exist")
    cy.findByPlaceholderText(form.email)
      .as("email")
      .should("have.prop", "type", "email")
      .and("have.prop", "required")
    cy.findByRole("button", { name: form.button }).as("button")
  })

  it("Tests success flow", () => {
    cy.intercept(form.url, req => {
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

  it("Tests additional security flow", () => {
    cy.intercept(form.url, req => {
      expect(req.body).to.include("email_address")
      expect(req.body).to.include(user.email)
      req.reply({
        statusCode: 200,
        body: {
          status: "quarantined",
          url: "https://example.com",
        },
      })
    })
    cy.get("@email").type(user.email, { delay: 50 })
    cy.get("@button").click()
    cy.findByText(form.quarantined, { exact: false }).should("be.visible")
  })

  it("Tests error flow", () => {
    cy.get("@button").click()
    cy.get("input:invalid").should("have.length", 1)

    cy.get("@email").type("wrong email")
    cy.get("input:invalid").should("have.length", 1)
    cy.get("@email").clear()

    cy.intercept(form.url, req => {
      req.destroy()
    })
    cy.get("@email").type(user.email, { delay: 50 })
    cy.get("@button").click()
    cy.findByText(form.error, { exact: false }).as("error").should("be.visible")
    cy.get("@email").click()
    cy.get("@error").should("not.exist")
  })
})
