import React from "react"
import { useTranslation } from "react-i18next"

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
import { useSubscribe } from "../hooks"
import Callout from "./callout"

const Subscribe = () => {
  const { t } = useTranslation("components/subscribe")
  const { state, setState, handleSubmit, FORM_URL } = useSubscribe()

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
                <Icon type="at" $color="border"></Icon>
                <Input
                  required
                  autoComplete="off"
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
                <Icon type={state === "loading" ? "loading" : "send"}></Icon>
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
