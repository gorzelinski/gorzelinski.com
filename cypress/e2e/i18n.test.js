/// <reference types="Cypress" />

const pages = [
  [
    {
      lang: "en",
      hreflang: "en-US",
      url: "/",
      title: "Matthew Gorzelinski",
      description: "things on the Internet",
      heading: /create/i,
      link: /create/i,
    },
    {
      lang: "pl",
      hreflang: "pl-PL",
      url: "/pl/",
      title: "Mateusz Gorzeliński",
      description: "rzeczy w Internecie",
      heading: /tworzę/i,
      link: /stwórzmy/i,
    },
  ],
  [
    {
      lang: "en",
      hreflang: "en-US",
      url: "/portfolio/",
      title: "Portfolio",
      description: "websites",
      heading: "Portfolio",
      link: /check/i,
    },
    {
      lang: "pl",
      hreflang: "pl-PL",
      url: "/pl/portfolio/",
      title: "Portfolio",
      description: "strony internetowe",
      heading: "Portfolio",
      link: /sprawdź/i,
    },
  ],
  [
    {
      lang: "en",
      hreflang: "en-US",
      url: "/about/",
      title: "About",
      description: "Matthew",
      heading: /story/i,
      link: "About",
    },
    {
      lang: "pl",
      hreflang: "pl-PL",
      url: "/pl/about/",
      title: "O",
      description: "Mateusz",
      heading: /historia/i,
      link: "O mnie",
    },
  ],
  [
    {
      lang: "en",
      hreflang: "en-US",
      url: "/blog/",
      title: "Blog",
      description: "design",
      heading: "Blog",
      link: /read post/i,
    },
    {
      lang: "pl",
      hreflang: "pl-PL",
      url: "/pl/blog/",
      title: "Blog",
      description: "projektowaniu",
      heading: "Blog",
      link: /czytaj wpis/i,
    },
  ],
  [
    {
      lang: "en",
      hreflang: "en-US",
      url: "/portfolio/gorzelinski/",
      title: "Behind the scenes of my website",
      description: "my website",
      heading: "Behind the scenes of my website",
      link: "Recursion",
    },
    {
      lang: "pl",
      hreflang: "pl-PL",
      url: "/pl/portfolio/gorzelinski/",
      title: "Kulisy powstawania mojej strony",
      description: "moją stronę",
      heading: "Kulisy powstawania mojej strony",
      link: "Rekurencja",
    },
  ],
  [
    {
      lang: "en",
      hreflang: "en-US",
      url: "/blog/stylish-design-principles-with-a-nasty-acronym/",
      title: "Stylish design principles with a nasty acronym",
      description:
        "In this post, we will look at four universal design principles that can improve any graphical work",
      heading: "Stylish design principles with a nasty acronym",
      link: /projects/i,
      date: "May 09, 2021",
      share: /share/i,
      more: /read/i,
    },
    {
      lang: "pl",
      hreflang: "pl-PL",
      url: "/pl/blog/stylish-design-principles-with-a-nasty-acronym/",
      title: "Stylowe zasady designu o paskudnym akronimie",
      description:
        "W tym wpisie przyjrzymy się czterem, uniwersalnym zasadom designu, które mogą poprawić dowolną pracę graficzną",
      heading: "Stylowe zasady designu o paskudnym akronimie",
      link: /projektów/i,
      date: "09 maja, 2021",
      share: /udostępnij/i,
      more: /przeczytaj/i,
    },
  ],
  [
    {
      lang: "en",
      hreflang: "en-US",
      url: "/uses/",
      title: "What Matthew uses?",
      description: "specifics",
      heading: "Services",
      link: "Home",
    },
    {
      lang: "pl",
      hreflang: "pl-PL",
      url: "/pl/uses/",
      title: "Czego Mateusz używa?",
      description: "szczegółami",
      heading: "Serwisy",
      link: "Główna",
    },
  ],
]

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
        cy.findByTestId("sun-and-moon").should("exist")
        cy.findByRole("heading", { name: heading }).should("be.visible")
        checkHeadTags(translation, index, translations)
        cy.findAllByRole("link", { name: link })
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
          cy.findByText(translation.date, { exact: false }).should("be.visible")
          cy.get('a[rel="prev"]')
            .should("have.prop", "href")
            .and("contain", `${lang === "en" ? "" : lang}`)
          cy.findByText(translation.share).should("be.visible")
        }
      })
    })
  })
})
