import React from "react"
import {
  InformationCircle,
  Warning,
  AlertCircle,
  CheckmarkCircle,
  Bulb,
} from "@styled-icons/ionicons-solid"

import { Icon, Callout as StyledCallout } from "../elements"

const Callout = ({ children, type, marginReset }) => {
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
    <StyledCallout {...{ $type: type, $marginReset: marginReset }}>
      <Icon className="icon">{selectIcon(type)}</Icon>
      {children}
    </StyledCallout>
  )
}

export default Callout
