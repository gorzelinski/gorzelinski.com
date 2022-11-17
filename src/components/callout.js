import React from "react"
import styled from "styled-components"

import { colorStates, Icon } from "../elements"

const StyledCallout = styled.div`
  position: relative;
  border-radius: var(--border-radius-20);
  padding: var(--space-30);
  margin: var(--vertical-rhythm) 0;
  transition: background-color var(--duration-natural) ease-out;

  ${colorStates}

  & > *:nth-child(2) {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > .icon {
    --width: calc(var(--font-height-base) + 2 * var(--space-20));
    --height: var(--width);
    position: absolute;
    top: calc(-1 * var(--height) / 2);
    right: calc(-1 * var(--width) / 4);
    padding: var(--space-20);
    background-color: var(--color-background);
    border-radius: 50%;
    transition: inherit;
  }
`

const Callout = ({ children, type }) => (
  <StyledCallout {...{ $color: type }}>
    <Icon type={type}></Icon>
    {children}
  </StyledCallout>
)

export default Callout
