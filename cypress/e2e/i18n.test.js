/// <reference types="Cypress" />

const indexMock = [
  {
    lang: "en",
    hreflang: "en-US",
    url: "/",
    title: "Matthew Gorzelinski",
    description: "things on the Internet",
    heading: /create/i,
    cta: /create/i,
    portfolio: {
      heading: /projects/i,
      link: /projects/i,
    },
    about: {
      heading: /matthew/i,
      link: /story/i,
    },
    blog: {
      heading: /posts/i,
      link: /posts/i,
    },
    signUp: {
      heading: /curiosity/i,
      button: /sign up/i,
      description: /newsletter/i,
      email: /your email/i,
    },
    contact: {
      heading: /say hello/i,
      link: /contact me/i,
    },
    footer: {
      email: /write me an email/i,
      socials: /find me elsewhere/i,
      language: /change language/i,
      note: /created this site/i,
    },
  },
  {
    lang: "pl",
    hreflang: "pl-PL",
    url: "/pl/",
    title: "Mateusz Gorzeliński",
    description: "rzeczy w internecie",
    heading: /tworzę/i,
    cta: /stwórzmy/i,
    portfolio: {
      heading: /projekty/i,
      link: /projekty/i,
    },
    about: {
      heading: /mateusz/i,
      link: /historia/i,
    },
    blog: {
      heading: /wpisy/i,
      link: /wpisy/i,
    },
    signUp: {
      heading: /ciekawość/i,
      button: /zapisz się/i,
      description: /newsletter/i,
      email: /twój email/i,
    },
    contact: {
      heading: /przywitaj/i,
      link: /skontaktuj się/i,
    },
    footer: {
      email: /napisz mi/i,
      socials: /znajdź mnie/i,
      language: /zmień język/i,
      note: /stworzyłem tę stronę/i,
    },
  },
]

const portfolioMock = [
  {
    lang: "en",
    hreflang: "en-US",
    url: "/portfolio/",
    title: "Portfolio",
    description: "websites",
    project: /check/i,
  },
  {
    lang: "pl",
    hreflang: "pl-PL",
    url: "/pl/portfolio/",
    title: "Portfolio",
    description: "strony internetowe",
    project: /sprawdź/i,
  },
]

const aboutMock = [
  {
    lang: "en",
    hreflang: "en-US",
    url: "/about/",
    title: "About",
    link: "About",
    description: "Matthew",
    heading: /story/i,
  },
  {
    lang: "pl",
    hreflang: "pl-PL",
    url: "/pl/about/",
    title: "O",
    link: "O mnie",
    description: "Mateusz",
    heading: /historia/i,
  },
]

const blogMock = [
  {
    lang: "en",
    hreflang: "en-US",
    url: "/blog/",
    title: "Blog",
    description: "design",
    post: /read post/i,
  },
  {
    lang: "pl",
    hreflang: "pl-PL",
    url: "/pl/blog/",
    title: "Blog",
    description: "projektowaniu",
    post: /czytaj wpis/i,
  },
]

const projectsMock = [
  {
    lang: "en",
    hreflang: "en-US",
    url: "/portfolio/gorzelinski/",
    title: "Behind the scenes of my website",
    description: "behind the scenes",
  },
  {
    lang: "pl",
    hreflang: "pl-PL",
    url: "/pl/portfolio/gorzelinski/",
    title: "Kulisy powstawania mojej strony",
    description: "kulisy",
  },
]

const postsMock = [
  {
    lang: "en",
    hreflang: "en-US",
    url: "/blog/stylish-design-principles-with-a-nasty-acronym/",
    title: "Stylish design principles with a nasty acronym",
    description:
      "In this post, we will look at four universal design principles that can improve any graphical work",
    date: "May 09, 2021",
    share: /share/i,
    more: /read/i,
    internalLink: /projects/i,
  },
  {
    lang: "pl",
    hreflang: "pl-PL",
    url: "/pl/blog/stylish-design-principles-with-a-nasty-acronym/",
    title: "Stylowe zasady designu o paskudnym akronimie",
    description:
      "W tym wpisie przyjrzymy się czterem, uniwersalnym zasadom designu, które mogą poprawić dowolną pracę graficzną",
    date: "09 maja, 2021",
    share: /udostępnij/i,
    more: /przeczytaj/i,
    internalLink: /projektów/i,
  },
]

describe("I18n tests", () => {
  const changeLanguage = lang => {
    cy.get(`a[lang="${lang}"]`).click()
  }

  const checkTags = (page, index, pages) => {
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
    if (page.lang === "en") {
      cy.get('a[rel="prev"]')
        .should("have.prop", "href")
        .and("not.contain", page.lang)
    } else {
      cy.get('a[rel="prev"]')
        .should("have.prop", "href")
        .and("contain", page.lang)
    }
  }

  it("Visits home page and checks its translations", () => {
    cy.visit(indexMock[0].url)
    indexMock.forEach((page, index, pages) => {
      cy.url().should("contain", page.url)
      checkTags(page, index, pages)

      cy.findByLabelText(page.heading, { exact: false }).should("be.visible")
      cy.findByRole("link", { name: page.cta, exact: false }).should(
        "be.visible"
      )

      cy.findByRole("heading", {
        name: page.portfolio.heading,
        exact: false,
      }).should("be.visible")
      cy.findByRole("link", { name: page.portfolio.link, exact: false }).should(
        "be.visible"
      )

      cy.findByRole("heading", {
        name: page.about.heading,
        exact: false,
      }).should("be.visible")
      cy.findByRole("link", { name: page.about.link, exact: false }).should(
        "be.visible"
      )

      cy.findByRole("heading", {
        name: page.blog.heading,
        exact: false,
      }).should("be.visible")
      cy.findByRole("link", { name: page.blog.link, exact: false }).should(
        "be.visible"
      )

      cy.findByRole("heading", {
        name: page.signUp.heading,
        exact: false,
      }).should("be.visible")
      cy.findByText(page.signUp.description, { exact: false }).should(
        "be.visible"
      )

      cy.findByPlaceholderText(page.signUp.email, { exact: false }).should(
        "be.visible"
      )

      cy.findByRole("heading", {
        name: page.contact.heading,
        exact: false,
      }).should("be.visible")
      cy.findByRole("link", { name: page.contact.link, exact: false }).should(
        "be.visible"
      )

      cy.findByText(page.footer.email, { exact: false }).should("be.visible")
      cy.findByText(page.footer.socials, { exact: false }).should("be.visible")
      cy.findByText(page.footer.language, { exact: false }).should("be.visible")
      cy.findByText(page.footer.note, { exact: false }).should("be.visible")

      if (pages[index + 1]) {
        changeLanguage(pages[index + 1].lang)
      }
    })
  })

  it("Visits portfolio page and checks its translations", () => {
    cy.visit(portfolioMock[0].url)
    portfolioMock.forEach((page, index, pages) => {
      cy.url().should("contain", page.url)
      checkTags(page, index, pages)

      cy.findByRole("heading", { name: page.title }).should("be.visible")
      cy.findAllByRole("link", { name: page.project }).should("be.visible")

      if (pages[index + 1]) {
        changeLanguage(pages[index + 1].lang)
      }
    })
  })

  it("Visits portfolio project and checks its translations", () => {
    cy.visit(projectsMock[0].url)
    projectsMock.forEach((page, index, pages) => {
      cy.url().should("contain", page.url)
      checkTags(page, index, pages)

      cy.findByRole("heading", { name: page.title }).should("be.visible")
      checkLinking(page)

      if (pages[index + 1]) {
        changeLanguage(pages[index + 1].lang)
      }
    })
  })

  it("Visits about page and checks its translations", () => {
    cy.visit(aboutMock[0].url)
    aboutMock.forEach((page, index, pages) => {
      cy.url().should("contain", page.url)
      checkTags(page, index, pages)

      cy.findByRole("heading", { name: page.heading }).should("be.visible")
      cy.findByRole("link", { name: page.link, exact: false })
        .scrollIntoView({
          easing: "linear",
          duration: 300,
          offset: { top: -150 },
        })
        .should("be.visible")

      if (pages[index + 1]) {
        changeLanguage(pages[index + 1].lang)
      }
    })
  })

  it("Visits blog and checks its translations", () => {
    cy.visit(blogMock[0].url)
    blogMock.forEach((page, index, pages) => {
      cy.url().should("contain", page.url)
      checkTags(page, index, pages)

      cy.findByRole("heading", { name: page.title }).should("be.visible")
      cy.findAllByRole("link", { name: page.post }).should("be.visible")

      if (pages[index + 1]) {
        changeLanguage(pages[index + 1].lang)
      }
    })
  })

  it("Visits blog post and checks its translations", () => {
    cy.visit(postsMock[0].url)
    postsMock.forEach((page, index, pages) => {
      cy.url().should("contain", page.url)
      checkTags(page, index, pages)

      cy.findByRole("heading", { name: page.title }).should("be.visible")
      cy.get("header > small").should("contain", page.date)
      cy.findByText(page.share).should("be.visible")
      cy.findByRole("heading", { name: page.more, exact: false }).should(
        "be.visible"
      )
      checkLinking(page)
      // Here is a different test of localized link inside MDX content
      if (page.lang === "en") {
        cy.findByRole("link", { name: page.internalLink, exact: false })
          .should("have.prop", "href")
          .and("not.contain", page.lang)
      } else {
        cy.findByRole("link", { name: page.internalLink, exact: false })
          .should("have.prop", "href")
          .and("contain", page.lang)
      }

      if (pages[index + 1]) {
        changeLanguage(pages[index + 1].lang)
      }
    })
  })
})
