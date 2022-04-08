import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import {
  AlertCircle,
  At,
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
  InputWrapper,
  Li,
  P,
  Section,
  Small,
  Tile,
  Ul,
} from "../elements"
import { useLocalization } from "gatsby-theme-i18n"

const Subscribe = () => {
  const { locale } = useLocalization()
  const { t } = useTranslation("components/subscribe")
  const [state, setState] = useState("idle")
  const ENGLISH_FORM_ID = `3106682`
  const POLISH_FORM_ID = `3084916`
  const ENGLISH_TAG = `2999839`
  const POLISH_TAG = `2987505`
  const FORM_URL = `https://app.convertkit.com/forms/${
    locale === "pl" ? POLISH_FORM_ID : ENGLISH_FORM_ID
  }/subscriptions`

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
      <Tile $justify="center">
        <H3 as="h2" $marginReset="top">
          {t("heading")}
        </H3>
        <P>{t("description")}</P>
        <Ul>
          <Li>{t("topics.webDevelopment")}</Li>
          <Li>{t("topics.science")}</Li>
          <Li>{t("topics.books")}</Li>
          <Li>{t("topics.personal")}</Li>
        </Ul>
        {state !== "success" ? (
          <>
            <Form action={FORM_URL} method="post" onSubmit={handleSubmit}>
              <input
                style={{ display: "none" }}
                type="checkbox"
                name="tags[]"
                value={locale === "pl" ? POLISH_TAG : ENGLISH_TAG}
                checked={true}
                readOnly
              ></input>
              <InputWrapper>
                <Icon $type="border">
                  <At></At>
                </Icon>
                <Input
                  required
                  name="email_address"
                  id="email"
                  type="email"
                  placeholder={t("email")}
                  aria-label={t("email")}
                  disabled={state === "loading" ? true : false}
                  onClick={() => setState("idle")}
                ></Input>
              </InputWrapper>
              <Button
                as="button"
                $grow
                $type="primary"
                $animation={
                  state === "loading" ? "icon-spinning" : "icon-wobble"
                }
                disabled={state === "idle" ? false : true}
                type="submit"
              >
                {t("button")}
                <Icon>{selectIcon()}</Icon>
              </Button>
              <Tile $span="all">
                <Small $marginReset="bottom">{t("footnote")}</Small>
              </Tile>
            </Form>
          </>
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
