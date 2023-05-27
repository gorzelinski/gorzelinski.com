import React, { useCallback, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"
import confetti from "canvas-confetti"

import { Button, H1, Hero, P, Tile } from "../elements"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ThankYou = ({ location }) => {
  const { locale } = useLocalization()
  const { t } = useTranslation("pages/thank-you")
  const headerRef = useRef(null)
  const buttonRef = useRef(null)

  const releaseConfetti = useCallback(() => {
    const y = buttonRef.current.offsetTop / window.innerHeight
    const x =
      (buttonRef.current.offsetLeft + buttonRef.current.offsetWidth) /
      window.innerWidth
    const colors = ["#47a3ff", "#ffbe0a", "#157f1f", "#c92c4e"]

    confetti({
      particleCount: 50,
      spread: 90,
      angle: 75,
      origin: {
        x,
        y,
      },
      colors,
      shapes: ["square"],
    })
  }, [])

  useEffect(() => {
    const y = headerRef.current.offsetTop / window.innerHeight
    const colors = ["#0466c8", "#47a3ff", "#ffbe0a", "#157f1f", "#c92c4e"]

    confetti({
      particleCount: 200,
      spread: 180,
      ticks: 400,
      origin: {
        x: 0.5,
        y,
      },
      colors,
    })
  }, [])

  return (
    <Layout location={location}>
      <Seo
        lang={locale}
        title={t("title")}
        titleTemplate={true}
        description={t("description")}
        slug={location.pathname}
      ></Seo>
      <Hero>
        <Tile>
          <H1 $decorative ref={headerRef}>
            {t("title")}
          </H1>
          <P $type="lead">{t("description")}</P>
          <Button
            as="button"
            $type="primary"
            ref={buttonRef}
            onClick={releaseConfetti}
          >
            {t("button")} 🎉
          </Button>
        </Tile>
      </Hero>
    </Layout>
  )
}

export default ThankYou
