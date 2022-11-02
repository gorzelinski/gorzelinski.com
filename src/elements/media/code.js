import styled, { css } from "styled-components"

import { border, media } from "../utils"

export const code = css`
  font-size: var(--font-size-10);
  line-height: var(--font-height-10);
  font-family: var(--font-family-code);
  font-weight: var(--font-weight-regular);
  transition: background-color var(--duration-natural) ease-out,
    box-shadow var(--duration-natural) ease-out,
    border-color var(--duration-natural) ease-out;
`

export const InlineCode = styled.code`
  ${code}
  font-weight: inherit;
  display: inline-block;
  color: var(--color-primary-base);
  background-color: var(--color-gray-90);
  border-radius: var(--border-radius-10);
  padding: var(--space-10) var(--space-20);
  box-shadow: var(--shadow-depth-00);
`

export const BlockCode = styled.pre`
  ${border.bottom}
  ${border.top}
  ${code}
  display: block;
  position: relative;
  padding: var(--space-30);
  margin: 0 var(--overflow-wrapper) var(--vertical-rhythm);
  box-shadow: var(--shadow-depth-10);

  ${media.tablet`
    margin: 0 0 var(--vertical-rhythm);
    ${border.all}
  `}

  & .header {
    display: flex;
    gap: var(--space-20);
    justify-content: space-between;
    flex-wrap: wrap;

    & > * {
      user-select: none;
      margin: 0;
    }
  }

  & .title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--color-gray-00);
  }

  & .language {
    flex: 0;
    color: var(--color-gray-00);
  }

  & > code {
    --line-margin: var(--space-30);
    --line-number-margin: var(--space-20);

    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    line-height: var(--font-height-base);

    & [data-testid*="line"]:last-child {
      margin-bottom: var(--line-margin);
    }

    & [data-testid*="line"]:first-child {
      margin-top: var(--line-margin);
    }

    & [data-testid*="highlight"] {
      & .line-number {
        color: var(--color-primary-base);
        font-weight: var(--font-weight-bold);
      }
    }

    & .line-number {
      user-select: none;
      display: inline-block;
      width: 2ch;
      margin: 0 var(--line-number-margin) 0 0;

      ${media.tablet`
        --line-number-margin: var(--space-30);
      `}
    }
  }
`
