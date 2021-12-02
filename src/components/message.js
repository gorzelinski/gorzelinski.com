import React from "react"
import {
  InformationCircle,
  Warning,
  AlertCircle,
  CheckmarkCircle,
} from "@styled-icons/ionicons-solid"

import { Icon, Message as StyledMessage } from "../elements"

const Message = ({ children, type }) => {
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
      default:
        return null
    }
  }
  return (
    <StyledMessage {...{ [`$${type}`]: true }}>
      <Icon>{selectIcon(type)}</Icon>
      {children}
    </StyledMessage>
  )
}

export default Message
