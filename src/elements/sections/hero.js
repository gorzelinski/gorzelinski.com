import styled from "styled-components"

import { grid } from "../grid"
import { media } from "../utils"

export const Hero = styled.section`
  ${grid}
  padding-top: ${props => props.theme.space.xxl};

  @media (orientation: portrait) {
    --mobileNavHeight: calc(
      4 * ${props => props.theme.space.xs} +
        ${props => props.theme.font.height.tiny}
    );
    --marginTop: ${props => props.theme.space.xl};

    padding-top: ${props => props.theme.space.m};
    min-height: calc(100vh - var(--mobileNavHeight) - var(--marginTop));
    align-items: center;
  }

  ${media.mobile`
    @media (orientation: portrait) {
      padding-top: ${props => props.theme.space.xxl};
      min-height: auto;
      align-items: auto;
    }
    min-height: auto;
    align-items: start;
  `}

  & > * {
    max-width: calc(72rem / 1.618);
  }
`
