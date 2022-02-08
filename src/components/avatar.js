import React from "react"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"

import { Avatar as StyledAvatar, H6, Small } from "../elements"
import Link from "./link"

const Avatar = () => {
  const { t } = useTranslation("components/bio")

  return (
    <StyledAvatar>
      <StaticImage
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/gorzelinski.jpg"
        width={64}
        height={64}
        quality={100}
        alt={`${t("name")} - ${t("alt")}`}
        transformOptions={{
          fit: "cover",
          cropFocus: "top",
        }}
      />
      <div>
        <H6 as="p" $top $bottom>
          <Link href="/about">{t("name")}</Link>
        </H6>
        <Small as="p" $bottom>
          {t("summary")}
        </Small>
      </div>
    </StyledAvatar>
  )
}

export default Avatar
