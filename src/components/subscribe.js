import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"
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

const Subscribe = () => {
  const { locale } = useLocalization()
  const { t } = useTranslation("components/subscribe")
  const [state, setState] = useState("idle")
  const FORM_URL = `https://app.convertkit.com/forms/3084916/subscriptions`
  const ENGLISH_TAG = `2987506`
  const POLISH_TAG = `2987505`

  const handleSubmit = async e => {
    e.preventDefault()
    setState("loading")
    const data = new FormData(e.target)

    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      })

      const json = await response.json()

      if (json.status === "success") {
        setState("success")
        return
      }
      setState("error")
    } catch (error) {
      setState("error")
    }
  }

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
          <Form action={FORM_URL} method="post" onSubmit={handleSubmit}>
            <select
              style={{ display: "none" }}
              name="tags[]"
              value={locale === "pl" ? POLISH_TAG : ENGLISH_TAG}
              readOnly
            >
              <option value={ENGLISH_TAG}>English</option>
              <option value={POLISH_TAG}>Polish</option>
            </select>
            <Label $hidden htmlFor="email">
              {t("email.label")}
            </Label>
            <Input
              required
              name="email_address"
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
              type="submit"
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

export default Subscribe
