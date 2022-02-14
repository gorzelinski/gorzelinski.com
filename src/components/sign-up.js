import React from "react"
import { useTranslation } from "react-i18next"
import { Send } from "@styled-icons/ionicons-solid"

import {
  Button,
  Form,
  H3,
  Icon,
  Input,
  Label,
  P,
  Section,
  Tile,
} from "../elements"

const SignUp = () => {
  const { t } = useTranslation("components/sign-up")

  return (
    <Section $featured>
      <Tile>
        <H3 as="h2" $marginReset="top">
          {t("heading")}
        </H3>
        <P $lead>{t("description")}</P>
        <Form>
          <Label $hidden htmlFor="name">
            {t("name.label")}
          </Label>
          <Input
            required
            name="name"
            id="name"
            type="text"
            placeholder={t("name.placeholder")}
            autoComplete="off"
          ></Input>
          <Label $hidden htmlFor="email">
            {t("email.label")}
          </Label>
          <Input
            required
            name="email"
            id="email"
            type="email"
            placeholder={t("email.placeholder")}
          ></Input>
          <Button as="button" $grow $type="primary" $animation="icon-wobble">
            {t("button")}
            <Icon>
              <Send></Send>
            </Icon>
          </Button>
        </Form>
      </Tile>
    </Section>
  )
}

export default SignUp
