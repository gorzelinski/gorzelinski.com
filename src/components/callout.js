import React from "react"
import styled, { css } from "styled-components"
import {
  InformationCircle,
  Warning,
  AlertCircle,
  CheckmarkCircle,
  Bulb,
} from "@styled-icons/ionicons-solid"

import { Icon } from "../elements"

const StyledCallout = styled.div`
  position: relative;
  border-radius: var(--border-radius-m);
  padding: var(--space-s);
  margin: var(--vertical-rhythm) 0;
  transition: background-color var(--duration-natural) ease-out;

  ${props => {
    switch (props.$type) {
      case "info":
        return css`
          color: var(--color-primary-base);
          background-color: var(--color-primary-100);
        `
      case "danger":
        return css`
          color: var(--color-red-base);
          background-color: var(--color-red-100);
        `
      case "warning":
        return css`
          color: var(--color-orange-base);
          background-color: var(--color-orange-100);
        `
      case "success":
        return css`
          color: var(--color-green-base);
          background-color: var(--color-green-100);
        `
      default:
        return css`
          color: var(--color-primary-base);
          background-color: var(--color-primary-100);
        `
    }
  }}

  & > *:nth-child(2) {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > .icon {
    --width: calc(var(--font-height-base) + 2 * var(--space-xs));
    --height: var(--width);
    position: absolute;
    top: calc(-1 * var(--height) / 2);
    right: calc(-1 * var(--width) / 4);
    padding: var(--space-xs);
    background-color: var(--color-background);
    border-radius: 50%;
    transition: inherit;
  }
`

const Callout = ({ children, type }) => {
  const selectIcon = type => {
    switch (type) {
      case "info":
        return <InformationCircle></InformationCircle>
      case "danger":
        return <AlertCircle></AlertCircle>
      case "warning":
        return <Warning></Warning>
      case "success":
        return <CheckmarkCircle></CheckmarkCircle>
      case "idea":
        return <Bulb></Bulb>
      default:
        return null
    }
  }
  return (
    <StyledCallout {...{ $type: type }}>
      <Icon className="icon">{selectIcon(type)}</Icon>
      {children}
    </StyledCallout>
  )
}

export default Callout
