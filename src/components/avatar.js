import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"

import { P, Small, Tile } from "../elements"
import Link from "./link"

const StyledAvatar = styled.div`
  display: flex;
  gap: var(--space-s);
  align-items: center;

  .gatsby-image-wrapper {
    border-radius: 50%;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
  }
`

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
      <Tile>
        <P $type="ui">
          <Link href="/about/" rel="author">
            {t("name")}
          </Link>
        </P>
        <Small as="p">{t("summary")}</Small>
      </Tile>
    </StyledAvatar>
  )
}

export default Avatar
