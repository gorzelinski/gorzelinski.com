import React from "react"
import { useTranslation } from "react-i18next"

import { H2, H6, Icon, Li, P, Section, Tile, Ul } from "../elements"
import Link from "./link"

const CulturalCorner = () => {
  const { t } = useTranslation("components/cultural-corner")

  return (
    <Section>
      <Tile $span="all">
        <H2>{t("cultural.heading")}</H2>
        <P $type="lead">{t("cultural.description")}</P>
      </Tile>
      {t("corner", { returnObjects: true }).map((media, index) => (
        <Tile key={`media-${index}`}>
          <H6 as="h3">
            <Icon type={media.icon}></Icon> {media.heading}
          </H6>
          <Ul>
            {media.items.map((item, index) => (
              <Li key={`title-${index}`}>
                <Link href={item.link}>{item.title}</Link>
              </Li>
            ))}
          </Ul>
        </Tile>
      ))}
    </Section>
  )
}

export default CulturalCorner
