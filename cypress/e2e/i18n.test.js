/// <reference types="Cypress" />

const postsMock = [
  {
    lang: "en",
    hreflang: "en-US",
    url: "/blog/stylish-design-principles-with-a-nasty-acronym-crap",
    title: "Stylish design principles with a nasty acronym - CRAP",
    description:
      "In this post, we will look at four universal design principles that can improve any graphical work: website, slide, poster, document, etc.",
    date: "May 09, 2021",
    internalLink: /engineer/i,
  },
  {
    lang: "pl",
    hreflang: "pl-PL",
    url: "/pl/blog/stylish-design-principles-with-a-nasty-acronym-crap",
    title: "Stylowe zasady designu o paskudnym akronimie - CRAP",
    description:
      "W tym wpisie przyjrzymy się czterem, uniwersalnym zasadom designu, które mogą poprawić dowolną pracę graficzną: stronę internetową, slajd, plakat, dokument itp.",
    date: "09 maja, 2021",
    internalLink: /inżynierem/i,
  },
]

const projectsMock = [
  {
    lang: "en",
    hreflang: "en-US",
    url: "/portfolio/gorzelinski",
    title: "Behind the scenes of my website",
    description:
      "This case study peeks behind the scenes of building my website.",
  },
  {
    lang: "pl",
    hreflang: "pl-PL",
    url: "/pl/portfolio/gorzelinski",
    title: "Kulisy powstawania mojej strony",
    description:
      "W tym case study przedstawiam kulisy powstawania mojej strony.",
  },
]

describe("I18n tests", () => {
  const checkTags = (page, index, pages) => {
    cy.visit(page.url)
    cy.get("html").should("have.prop", "lang", page.lang)
    cy.title().should("contain", page.title)
    cy.get('meta[name="description"]')
      .should("have.prop", "content")
      .and("contain", page.description)
    pages.forEach(page => {
      cy.get(`link[hreflang|="${page.hreflang}"]`)
        .should("have.prop", "rel", "alternate")
        .and("have.prop", "href")
        .and("contain", page.url)
    })
    cy.get('meta[property="og:locale"]').should(
      "have.prop",
      "content",
      page.hreflang.replace("-", "_")
    )
    const withoutCurrent = pages.filter((page, i) => i !== index)
    withoutCurrent.forEach(page => {
      cy.get('meta[property="og:locale:alternate"]').should(
        "have.prop",
        "content",
        page.hreflang.replace("-", "_")
      )
    })
  }

  const checkLinking = page => {
    cy.get('a[rel="prev"]').click()
    cy.findByRole("heading", { level: 1 }).should("be.visible")
    cy.url().should("not.contain", page.url)
    if (page.lang === "en") {
      cy.url().should("not.contain", page.lang)
    } else {
      cy.url().should("contain", page.lang)
    }
  }

  it("Visits blog post and checks its translations", () => {
    postsMock.forEach((post, index, posts) => {
      checkTags(post, index, posts)
      cy.findByRole("heading", { level: 1 }).should("contain", post.title)
      cy.get("header > small").should("contain", post.date)
      checkLinking(post)
      // Here is a different test of localized link inside MDX content
      if (post.lang === "en") {
        cy.findByRole("link", { name: post.internalLink, exact: false })
          .should("have.prop", "href")
          .and("not.contain", post.lang)
      } else {
        cy.findByRole("link", { name: post.internalLink, exact: false })
          .should("have.prop", "href")
          .and("contain", post.lang)
      }
    })
  })

  it("Visits portfolio project and checks its translations", () => {
    projectsMock.forEach((project, index, projects) => {
      checkTags(project, index, projects)
      cy.findByRole("heading", { level: 1 }).should("contain", project.title)
      checkLinking(project)
    })
  })
})
