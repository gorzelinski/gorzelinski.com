import styled from "styled-components"

import { border, marginTop } from "../utils"
import { grid } from "../grid"

export const Article = styled.article.attrs(() => ({
  $grid: "article",
}))`
  ${grid}
  ${marginTop}
  --margin-banner: calc(2 * var(--vertical-rhythm));
  --margin-sections: var(--vertical-rhythm);

  & > * {
    grid-column: 2;
  }

  & > figure,
  & > .image-wrapper {
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
