import styled from "styled-components"

import { border, marginTop, media } from "../utils"
import { article } from "../grid"

export const Article = styled.article`
  ${article}
  ${marginTop}
  --margin: var(--font-height-base);
  --margin-banner: calc(2 * var(--margin));
  --margin-sections: var(--margin);

  ${media.tablet`
    --margin: var(--font-height-xxs);
  `}
  & > * {
    grid-column: 2;
  }

  & > figure,
  & > .gatsby-image-wrapper {
    grid-column: 1 / span 3;
    height: auto;
    margin: 0 var(--overflow-wrapper);
    margin-bottom: var(--margin-banner);
  }

  & > header {
    margin-bottom: var(--margin-banner);
  }

  & > footer {
    margin-top: var(--margin-sections);
    padding-top: var(--margin-sections);
    ${border.top}
  }

  & > div > *:first-child {
    margin-top: 0;
  }
`
