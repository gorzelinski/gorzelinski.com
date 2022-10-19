/// <reference types="Cypress" />
import pages from "../fixtures/i18n.json"
import { icon } from "../fixtures/theme.json"

describe("I18n tests", () => {
  const checkHeadTags = (page, index, pages) => {
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

  pages.forEach(translations => {
    translations.forEach((translation, index) => {
      const { lang, hreflang, url, heading, link } = translation

      it(`Visits ${url} and checks translation`, () => {
        cy.visit(url)
        cy.findByTestId(icon).should("exist")
        cy.findByRole("heading", {
          name: new RegExp(heading, "i"),
        }).should("be.visible")
        checkHeadTags(translation, index, translations)
        cy.findAllByRole("link", { name: new RegExp(link, "i") })
          .should("be.visible")
          .and("have.prop", "href")
          .and("contain", `${lang === "en" ? "" : lang}`)
        cy.get(`a[lang="${lang}"]`)
          .should("be.visible")
          .and("have.prop", "lang", lang)
          .and("have.prop", "hreflang", hreflang)
          .and("have.prop", "href")
          .and("contain", `${lang === "en" ? "" : lang}`)

        if (translation.date) {
          cy.findAllByText(translation.date, { exact: false }).should(
            "be.visible"
          )
          cy.get('a[rel="prev"]')
            .should("have.prop", "href")
            .and("contain", `${lang === "en" ? "" : lang}`)
          cy.findByText(translation.share).should("be.visible")
          cy.findByText(translation.more, { exact: false }).should("be.visible")
        }
      })
    })
  })
})
