import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  AlertCircle,
  CheckmarkCircle,
  Send,
  Sync,
} from "@styled-icons/ionicons-solid"

import {
  Button,
  Callout,
  Form,
  H3,
  H6,
  Icon,
  Input,
  Label,
  P,
  Section,
  Tile,
} from "../elements"

const SignUp = () => {
  const { t } = useTranslation("components/sign-up")
  const [state, setState] = useState("idle")

  const selectIcon = () => {
    switch (state) {
      case "idle":
        return <Send></Send>
      case "loading":
        return <Sync></Sync>
      case "success":
        return <CheckmarkCircle></CheckmarkCircle>
      case "error":
        return <AlertCircle></AlertCircle>
      default:
        return <Send></Send>
    }
  }

  return (
    <Section $featured>
      <Tile>
        <H3 as="h2" $marginReset="top">
          {t("heading")}
        </H3>
        <P $type="lead">{t("description")}</P>
        {state !== "success" ? (
          <Form>
            <Label $hidden htmlFor="email">
              {t("email.label")}
            </Label>
            <Input
              required
              name="email"
              id="email"
              type="email"
              placeholder={t("email.placeholder")}
              disabled={state === "loading" ? true : false}
              onClick={() => setState("idle")}
            ></Input>
            <Button
              as="button"
              $grow
              $type="primary"
              $animation={state === "loading" ? "icon-spinning" : "icon-wobble"}
              disabled={state === "idle" ? false : true}
            >
              {t("button")}
              <Icon>{selectIcon()}</Icon>
            </Button>
          </Form>
        ) : null}
        {state === "success" || state === "error" ? (
          <Callout
            $marginReset="bottom"
            $type={state === "success" ? "success" : "danger"}
          >
            <H6 as="h3" $marginReset="top">
              {state === "success" ? t("success.heading") : t("error.heading")}
            </H6>
            <P>
              {state === "success"
                ? t("success.description")
                : t("error.description")}
            </P>
          </Callout>
        ) : null}
      </Tile>
    </Section>
  )
}

export default SignUp
