/// <reference types="Cypress" />

const postMock = {
  title: "Hello",
  heading: "Hello... world?",
  url: "/blog/hello-world/",
  button: "Read post",
  internalLink: /engineer/i,
  externalLink: /flow/i,
  share: [
    { name: "Twitter", url: "https://twitter.com/intent/tweet?url=" },
    { name: "Facebook", url: "https://www.facebook.com/sharer.php?u=" },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
  ],
}

const blogMock = {
  title: "Blog",
  heading: "Blog",
  url: "/blog/",
  button: "Blog",
  alternateLink: /all posts/i,
}

describe("Blog tests", () => {
  it("Checks search functionality", () => {
    cy.visit(blogMock.url)

    cy.findAllByRole("link", { name: postMock.button, exact: false }).should(
      "have.length.greaterThan",
      1
    )
    cy.findByPlaceholderText(/search posts/i, { exact: false })
      .type("Hello... world?{enter}", { delay: 100 })
      .should("not.have.focus")
    cy.findAllByRole("link", { name: /read/i, exact: false })
      .should("have.length", 1)
      .click()
  })

  it("Checks blog post links", () => {
    cy.findByRole("link", { name: postMock.internalLink, exact: false }).should(
      "not.have.prop",
      "target",
      "_blank"
    )

    cy.findByRole("link", { name: postMock.externalLink, exact: false })
      .should("have.prop", "target", "_blank")
      .and("have.prop", "rel")
      .and("contain", "nofollow")
      .and("contain", "noopener")
      .and("contain", "noreferrer")

    postMock.share.forEach(link => {
      cy.findAllByRole("link", { name: link.name })
        .first()
        .should("have.prop", "href")
        .and("contain", link.url)
    })

    cy.get('a[rel="next"]').should("be.visible").click()
    cy.url().should("not.contain", postMock.url)
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
