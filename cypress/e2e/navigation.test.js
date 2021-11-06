/// <reference types="Cypress" />

const email = "mateusz@gorzelinski.com"

describe("Navigation tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Navigates around the pages", () => {
    cy.findByRole("link", { name: "Portfolio" }).click()
    cy.url().should("contain", "/portfolio")
    cy.findByRole("heading", { level: 1 }).should("contain", "Portfolio")

    cy.get('a[href*="an-lam"]').should("be.visible").click()
    cy.url().should("contain", "/portfolio/an-lam")
    cy.findByRole("heading", { level: 1 }).should("contain", "An-lam")

    cy.findByRole("link", { name: "O mnie" }).should("be.visible").click()
    cy.url().should("include", "/o-mnie")
    cy.findByRole("heading", { level: 1 }).should("contain", "krótka historia")

    cy.findByRole("link", { name: "Blog" }).should("be.visible").click()
    cy.url().should("include", "/blog")
    cy.findByRole("heading", { level: 1 }).should("contain", "Blog")

    cy.get('a[href*="hello"]').should("be.visible").click()
    cy.url().should("contain", "/blog/hello-world")
    cy.findByRole("heading", { level: 1 }).should("contain", "Hello")

    cy.findByRole("link", { name: "Gorzeliński" }).should("be.visible").click()
    cy.url().should("not.include", "/blog/hello-world")
    cy.findByRole("heading", { level: 1 }).should(
      "contain",
      "rzeczy w internecie"
    )
  })
  it("Navigates around contact methods", () => {
    cy.findByRole("link", { name: "Kontakt" }).click()
    cy.url().should("contain", "#kontakt")

    cy.findByRole("link", { name: email }).should(
      "have.prop",
      "href",
      `mailto:${email}`
    )

    cy.findByRole("link", { name: /skontaktuj/i, exact: false }).should(
      "have.prop",
      "href",
      `mailto:${email}`
    )

    cy.findByRole("link", { name: "github" })
      .should("have.prop", "href")
      .and("contain", "https://github.com")

    cy.findByRole("link", { name: "dribbble" })
      .should("have.prop", "href")
      .and("contain", "https://dribbble.com")

    cy.findByRole("link", { name: "twitter" })
      .should("have.prop", "href")
      .and("contain", "https://twitter.com")

    cy.findByRole("link", { name: "facebook" })
      .should("have.prop", "href")
      .and("contain", "https://www.facebook.com")
  })
  it("Navigates to blog post and checks its links", () => {
    cy.findByRole("link", { name: /wszystkie wpisy/i }).click()
    cy.findByRole("heading", { level: 1 }).should("contain", "Blog")
    cy.get('a[href*="hello"]').should("be.visible").click()

    cy.findByRole("link", { name: /jestem/i, exact: false }).should(
      "not.have.prop",
      "target",
      "_blank"
    )

    cy.findByRole("link", { name: /flow/i, exact: false })
      .should("have.prop", "target", "_blank")
      .and("have.prop", "rel")
      .and("contain", "nofollow")
      .and("contain", "noopener")
      .and("contain", "noreferrer")

    cy.findAllByRole("link", { name: "twitter" })
      .first()
      .should("have.prop", "href")
      .and("contain", "https://twitter.com/intent/tweet?url=")

    cy.findAllByRole("link", { name: "facebook" })
      .first()
      .should("have.prop", "href")
      .and("contain", "https://www.facebook.com/sharer.php?u=")

    cy.findAllByRole("link", { name: "linkedin" })
      .first()
      .should("have.prop", "href")
      .and("contain", "https://www.linkedin.com/sharing/share-offsite/?url=")

    cy.get('a[rel="next"]').should("be.visible").click()

    cy.url().should("not.contain", "/hello-world")

    cy.get('a[rel="prev"]').should("be.visible").and("have.prop", "href")

    cy.get('a[rel="next"]').should("be.visible").and("have.prop", "href")
  })
  it("Navigates to portfolio project and checks its links", () => {
    cy.findByRole("link", { name: /wszystkie projekty/i })
      .should("be.visible")
      .click()
    cy.findByRole("heading", { level: 1 }).should("contain", "Portfolio")
    cy.get('a[href*="an-lam"]').should("be.visible").click()

    cy.get('a[rel="next"]').should("be.visible").click()
    cy.url().should("not.contain", "/an-lam")

    cy.get('a[rel="prev"]').should("be.visible").and("have.prop", "href")
  })
})
