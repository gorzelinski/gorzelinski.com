import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { A, Card, Figcaption, Figure, H1, P, Section } from "../elements"

const AboutMe = ({ data, location }) => {
  const name = data.site?.siteMetadata?.author?.name
  const image = getImage(data?.image)

  return (
    <Layout>
      <Seo title="O mnie" slug={location.pathname}></Seo>
      <Section>
        <Figure $half $portrait>
          <GatsbyImage
            image={image}
            alt={`${name} - zdjęcie profilowe`}
          ></GatsbyImage>
          <Figcaption>
            W rzeczywistości jestem przyjemniejszy niż wyglądam na tym zdjęciu.
            Przyrzekam!
          </Figcaption>
        </Figure>
        <Card $half>
          <H1 $top>A oto moja krótka historia</H1>
          <P>
            Moje najwcześniejsze wspomnienia nierozerwalnie związane są z
            elektroniką. Do dziś pamiętam dreszczyk emocji, towarzyszący mi
            podczas{" "}
            <A
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://youtu.be/uAZokuOXfu0"
            >
              dźwięku uruchamiania
            </A>{" "}
            pierwszego PlayStation. Brzmiał on jak przejście przez portal -
            wejście w inną, cyfrową galaktykę. Ta galaktyka już wtedy mnie
            pochłonęła. Po niemal 20 latach nadal w niej tkwię.
          </P>
          <P>
            Z biegiem lat, zainteresowanie elektroniką się u mnie pogłębiało.
            Mając kilkanaście lat dostałem swój pierwszy telefon - używany Sony
            Ericsson k300i. Nadal pamiętam jego specyfikację: 12MB pamięci,
            aparat VGA(0,3Mpix), wyświetlacz o 65 tysiącach kolorów. Wówczas te
            liczby nie mówiły mi wiele. Lubiłem jednak je analizować i
            porównywać między modelami. W zasadzie nadal to robię. Dziś
            przyjmuje to formę śledzenia blogów i vlogów technologicznych.
            Wówczas przeglądałem ulotki operatorów telekomunikacyjnych.
          </P>
          <P>
            Moja pasja do cyfr nie kończyła się na tym. W szkole najbardziej
            lubiłem matematykę (wiem, byłem dziwnym dzieckiem). Profil
            matematyczno-fizyczny w LO, a następnie studia na{" "}
            <A
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.put.poznan.pl/kierunek/elektronika-i-telekomunikacja"
            >
              Politechnice Poznańskiej
            </A>{" "}
            wydały mi się dobrym pomysłem.
          </P>
          <P>
            Chciałbym stwierdzić, że wybór kierunku{" "}
            <A
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://www.put.poznan.pl/kierunek/elektronika-i-telekomunikacja"
            >
              Elektronika i Telekomunikacja
            </A>{" "}
            był w pełni świadomy. Moja decyzja opierała się jednak na
            skojarzeniach i przypadku. Szczęśliwym przypadku. Na studiach nadal
            mogłem kreślić równania matematyczne - w tym logiczne. Konstruować
            na ich podstawie proste układy elektroniczne. Programować
            (mikro)procesory. Konfigurować routery i pogłębiać wiedzę na temat
            sieci. O tych ostatnich uczyłem się nie tylko na studiach.
          </P>
          <P>
            W trakcie studiów pracowałem w{" "}
            <A
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://semcore.pl/"
            >
              Semcore
            </A>
            , jako specjalista SEO.{" "}
            <strong>Wtedy zacząłem tworzyć strony internetowe</strong>. Pierwsze
            z nich wyglądały okropnie, ale spodobało mi się to. Po kilku
            miesiącach samodzielnej nauki rozpocząłem pracę jako Front-End
            Developer w{" "}
            <A
              target="_blank"
              rel="noopener noreferrer nofollow"
              href="https://af.agency/"
            >
              AF Agency
            </A>
            . Miałem okazję współpracować nad projektami dla marek takich jak
            Volkswagen, Skoda czy Develey. Poznałem też koszmar tworzenia
            newsletterów dla różnych klientów pocztowych. Mimo to, okres ten
            wspominam bardzo dobrze.
          </P>
          <P>
            Studia - z tytułem inżyniera - skończyłem w 2020 roku. Moja praca
            dyplomowa dotyczyła analizy technologii i narzędzi do tworzenia
            stron internetowych. Jednak na tym nie poprzestałem. Wiedzę na ten
            temat staram się pogłębiać cały czas - oglądając wykłady, słuchając
            podcastów i czytając książki.
          </P>
          <P>
            Choć książki „wujka Boba” i inne klasyki informatyki zajmują sporo
            miejsca na moim regale - nie ograniczam się tylko do książek
            technicznych. Mój Kallax ugina się także od książek
            psychologicznych, naukowych, filozoficznych i grubych biografii.
            Całe szczęście, że istnieje Kindle!
          </P>
          <P>
            Poza książkami lubię także inne media. Gry, filmy, muzyka -
            pochłaniam je wszystkie.
          </P>
          <P>
            Jeżeli się nie uczę i nie konsumuję różnych mediów (lub kawy) to
            najprawdopodobniej ćwiczę, spaceruję, przeglądam memy z kotami lub
            ciężko rozmyślam nad błędami poznawczymi.
          </P>
        </Card>
      </Section>
    </Layout>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query AllBioQuery {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        social {
          email
          github
          dribbble
          twitter
          facebook
        }
      }
    }
    image: file(relativePath: { eq: "gorzelinski.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
