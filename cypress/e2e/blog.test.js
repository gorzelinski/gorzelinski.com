/// <reference types="Cypress" />
import pages from "../fixtures/pages.json"

describe("Blog tests", () => {
  const blog = pages.find(page => page.slug === "/blog/")
  const post = pages.find(page => page.slug === "/blog/hello-world/")

  it("Checks load more functionality", () => {
    cy.visit(blog.slug)

    cy.findAllByRole("link", { name: post.button, exact: false }).should(
      "have.length",
      8
    )
    cy.findByRole("button", {
      name: blog.loadMore,
      exact: false,
    })
      .scrollIntoView({
        easing: "linear",
        duration: 300,
      })
      .click()
    cy.findAllByRole("link", {
      name: post.button,
    }).should("have.length.greaterThan", 8)
  })

  it("Checks search functionality", () => {
    cy.findAllByRole("link", { name: post.button, exact: false }).should(
      "have.length.greaterThan",
      1
    )
    cy.findByText("All posts").should("be.visible")
    cy.findByPlaceholderText(blog.search, { exact: false })
      .scrollIntoView({
        easing: "linear",
        duration: 300,
      })
      .type("Non existing post", { delay: 50 })
      .type("?{enter}", { delay: 300 })

    cy.findByText("Found posts", { exact: false }).should("contain.text", "0")
    cy.findAllByRole("link", { name: post.button, exact: false }).should(
      "have.length",
      0
    )
    cy.findByPlaceholderText(blog.search, { exact: false })
      .clear()
      .type("Hello... world", { delay: 50 })
      .type("?{enter}", { delay: 300 })
      .should("not.have.focus")
    cy.findAllByRole("link", { name: post.button, exact: false })
      .should("have.length", 1)
      .click()
  })

  it("Checks blog post links", () => {
    cy.findByRole("link", {
      name: post.internalLink,
    }).should("not.have.prop", "target", "_blank")

    cy.findByRole("link", { name: post.externalLink })
      .should("have.prop", "target", "_blank")
      .and("have.prop", "rel")
      .and("contain", "nofollow")
      .and("contain", "noopener")
      .and("contain", "noreferrer")

    post.share.forEach(link => {
      cy.findAllByRole("link", { name: link.name })
        .first()
        .should("have.prop", "href")
        .and("contain", link.url)
        .and("contain", encodeURIComponent(post.slug))
    })

    cy.get('a[rel="next"]').should("be.visible").click()
    cy.findByRole("heading", { level: 1 }).should("be.visible")
    cy.url().should("not.contain", post.slug)
    cy.get('a[rel="next"]').should("be.visible").and("have.prop", "href")
    cy.get('a[rel="prev"]').should("be.visible").and("have.prop", "href")
  })

  it("Checks progress bar on scroll", () => {
    cy.findByTestId("progress").should("not.be.visible")
    cy.findByTestId("progress-value").should("not.be.visible")
    cy.scrollTo(0, 2000, { duration: 250 })
    cy.findByTestId("progress").should("be.visible")
    cy.findByTestId("progress-value").should("be.visible")
  })
})
