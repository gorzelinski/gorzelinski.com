/// <reference types="Cypress" />

const email = "hello@gorzelinski.com"
const socials = [
  { name: "Github", url: "https://github.com", handler: "gorzelinski" },
  { name: "Dribbble", url: "https://dribbble.com", handler: "gorzelinski" },
  { name: "Facebook", url: "https://www.facebook.com", handler: "gorzelinski" },
  { name: "Twitter", url: "https://twitter.com", handler: "gorzelinski" },
]
const pages = [
  {
    heading: "Portfolio",
    url: "/portfolio/",
    button: "Portfolio",
    alternateLink: /all projects/i,
  },
  {
    heading: "An-lam",
    url: "/portfolio/an-lam/",
    button: "Check project",
  },
  { title: "About", heading: "story", url: "/about/", button: "About" },
  {
    heading: "uses",
    url: "/uses/",
    button: "Stuff I use",
  },
  {
    heading: "Blog",
    url: "/blog/",
    button: "Blog",
    alternateLink: /all posts/i,
  },
  {
    heading: "I",
    url: "/",
    button: "Matthew Gorzelinski",
  },
]

describe("Navigation tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Navigates around the pages", () => {
    pages.forEach(page => {
      cy.findAllByRole("link", { name: page.button })
        .filter(`a[href="${page.url}"]`)
        .scrollIntoView({
          easing: "linear",
          duration: 300,
          offset: { top: -150 },
        })
        .should("be.visible")
        .click()
      cy.findByRole("heading", { level: 1 }).should("contain", page.heading)
      cy.url().should("contain", page.url)
    })
  })

  it("Navigates around contact methods", () => {
    cy.findByRole("link", { name: "Contact" })
      .scrollIntoView({
        easing: "linear",
        duration: 300,
        offset: { top: -150 },
      })
      .click()
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

    socials.forEach(social => {
      cy.findAllByRole("link", { name: social.name })
        .should("have.prop", "href")
        .and("contain", social.url)
        .and("contain", social.handler)
    })
  })
})
