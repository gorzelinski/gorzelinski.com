/// <reference types="Cypress" />

const email = "hello@gorzelinski.com"
const portfolioMock = {
  title: "Portfolio",
  url: "/portfolio",
  alternateLink: /all projects/i,
}
const projectMock = {
  title: "An-lam",
  url: "/an-lam",
}
const aboutMock = {
  title: "About",
  url: "/about",
  heading: "story",
}
const blogMock = {
  title: "Blog",
  url: "/blog",
  alternateLink: /all posts/i,
}
const postMock = {
  title: "Hello",
  url: "/hello-world",
  internalLink: /engineer/i,
  externalLink: /flow/i,
}

describe("Navigation tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Navigates around the pages", () => {
    cy.findByRole("link", { name: portfolioMock.title })
      .should("be.visible")
      .click()
    cy.url().should("contain", portfolioMock.url)
    cy.findByRole("heading", { level: 1 }).should(
      "contain",
      portfolioMock.title
    )

    cy.get(`a[href*="${projectMock.url}"]`).should("be.visible").click()
    cy.url().should("contain", `${portfolioMock.url}${projectMock.url}`)
    cy.findByRole("heading", { level: 1 }).should("contain", projectMock.title)

    cy.findByRole("link", { name: aboutMock.title })
      .should("be.visible")
      .click()
    cy.url().should("include", aboutMock.url)
    cy.findByRole("heading", { level: 1 }).should("contain", aboutMock.heading)

    cy.findByRole("link", { name: blogMock.title }).should("be.visible").click()
    cy.url().should("include", blogMock.url)
    cy.findByRole("heading", { level: 1 }).should("contain", blogMock.title)

    cy.get(`a[href*="${postMock.url}"]`).should("be.visible").click()
    cy.url().should("contain", `${blogMock.url}${postMock.url}`)
    cy.findByRole("heading", { level: 1 }).should("contain", postMock.title)

    cy.findByRole("link", { name: "MG" }).should("be.visible").click()
    cy.url().should("not.include", `${blogMock.url}${postMock.url}`)
    cy.findByRole("heading", { level: 1 }).should("be.visible")
  })
  it("Navigates around contact methods", () => {
    cy.findByRole("link", { name: "Contact" }).click()
    cy.url().should("contain", "#contact")

    cy.findByRole("link", { name: email }).should(
      "have.prop",
      "href",
      `mailto:${email}`
    )

    cy.findByRole("link", { name: /contact me/i }).should(
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
    cy.findByRole("link", { name: blogMock.alternateLink }).click()
    cy.findByRole("heading", { level: 1 }).should("contain", "Blog")
    cy.get(`a[href*="${postMock.url}"]`).should("be.visible").click()

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

    cy.url().should("not.contain", postMock.url)

    cy.get('a[rel="prev"]').should("be.visible").and("have.prop", "href")

    cy.get('a[rel="next"]').should("be.visible").and("have.prop", "href")
  })
  it("Navigates to blog post and checks progress bar on scroll", () => {
    cy.findByRole("link", { name: blogMock.alternateLink }).click()
    cy.findByRole("heading", { level: 1 }).should("contain", blogMock.title)
    cy.get(`a[href*="${postMock.url}"]`).should("be.visible").click()
    cy.findByTestId("progress").should("not.be.visible")
    cy.findByTestId("progress-thumb").should("not.be.visible")
    cy.scrollTo(0, 2000)
    cy.findByTestId("progress").should("be.visible")
    cy.findByTestId("progress-thumb").should("be.visible")
  })
  it("Navigates to portfolio project and checks its links", () => {
    cy.findByRole("link", { name: portfolioMock.alternateLink })
      .should("be.visible")
      .click()
    cy.findByRole("heading", { level: 1 }).should(
      "contain",
      portfolioMock.title
    )
    cy.get(`a[href*="${projectMock.url}"]`).should("be.visible").click()

    cy.get('a[rel="next"]').should("be.visible").click()
    cy.url().should("not.contain", projectMock.url)

    cy.get('a[rel="prev"]').should("be.visible").and("have.prop", "href")
  })
})
