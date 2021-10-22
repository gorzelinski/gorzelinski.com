import styled from "styled-components"

import { marginTop } from "../utils"
import { article } from "../grid"

export const Article = styled.article`
  ${article}
  ${marginTop}

  & > * {
    grid-column: 2;
  }

  /* maybe change to whole header */
  & > figure {
    grid-column: 1 / span 3;
  }

  & > header {
    margin-bottom: ${props => props.theme.space.l};
    padding-bottom: ${props => props.theme.space.xs};
    border-bottom: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.surface.shade200};
  }

  & > footer {
    padding-top: ${props => props.theme.space.xs};
    border-top: ${props => props.theme.space.xxs} solid
      ${props => props.theme.color.surface.shade200};
  }

  & > div > *:first-child {
    margin-top: 0;
  }
`
