import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"
import { At, Send, Sync } from "@styled-icons/ionicons-solid"

import {
  Button,
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
import Callout from "./callout"

const Subscribe = () => {
  const { locale } = useLocalization()
  const { t } = useTranslation("components/subscribe")
  const [state, setState] = useState("idle")
  const ENGLISH_FORM_ID = `3106682`
  const POLISH_FORM_ID = `3084916`
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

  return (
    <Section $featured id="newsletter">
      <Tile $justify="center">
        <H3 as="h2">{t("heading")}</H3>
        <P>{t("description")}</P>
        <Ul>
          {t("topics", { returnObjects: true }).map((topic, index) => (
            <Li key={`topic-${index + 1}`}>{topic}</Li>
          ))}
        </Ul>
        {state !== "success" ? (
          <>
            <Form action={FORM_URL} method="post" onSubmit={handleSubmit}>
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
                <Icon>
                  {state === "loading" ? <Sync></Sync> : <Send></Send>}
                </Icon>
              </Button>
              <Tile $span="all">
                <Small>{t("footnote")}</Small>
              </Tile>
            </Form>
          </>
        ) : null}
        {state === "success" || state === "error" ? (
          <Callout type={state === "success" ? "success" : "danger"}>
            <H6 as="h3">
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
