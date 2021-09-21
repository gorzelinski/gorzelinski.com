import styled, { css } from "styled-components"
import { media, remToFloat } from "../utils"

export const Headings = css`
  font-family: ${props => props.theme.font.family.heading};
  font-weight: ${props => props.theme.font.weight.medium};
  margin-top: ${props => remToFloat(props.theme.font.height.base) * 2 + "rem"};
  margin-bottom: ${props => props.theme.font.height.base};
  color: ${props => props.theme.color.text.base};

  ${props =>
    props.$top &&
    css`
      margin-top: 0;
    `}

  ${props =>
    props.$bottom &&
    css`
      margin-bottom: 0;
    `}
`

export const HeadingXXL = css`
  font-size: ${props => props.theme.font.size.xxl};
  line-height: ${props => props.theme.font.height.xxl};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const HeadingXL = css`
  font-size: ${props => props.theme.font.size.xl};
  line-height: ${props => props.theme.font.height.xl};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const HeadingL = css`
  font-size: ${props => props.theme.font.size.l};
  line-height: ${props => props.theme.font.height.l};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const HeadingM = css`
  font-size: ${props => props.theme.font.size.m};
  line-height: ${props => props.theme.font.height.m};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const HeadingS = css`
  font-size: ${props => props.theme.font.size.s};
  line-height: ${props => props.theme.font.height.s};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const HeadingXS = css`
  font-size: ${props => props.theme.font.size.xs};
  line-height: ${props => props.theme.font.height.xs};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const BaseSize = css`
  font-size: ${props => props.theme.font.size.base};
  line-height: ${props => props.theme.font.height.base};
`

export const SmallSize = css`
  font-size: ${props => props.theme.font.size.small};
  line-height: ${props => props.theme.font.height.small};
`

export const TinySize = css`
  font-size: ${props => props.theme.font.size.tiny};
  line-height: ${props => props.theme.font.height.tiny};
`

export const Body = css`
  font-family: ${props => props.theme.font.family.body};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.color.text.shade300};
`

export const Meta = css`
  font-family: ${props => props.theme.font.family.heading};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.color.text.shade500};
`

export const UI = css`
  font-family: ${props => props.theme.font.family.heading};
  font-weight: ${props => props.theme.font.weight.medium};
  font-size: ${props => props.theme.font.size.base};
  letter-spacing: ${props => props.theme.font.spacing.wide};
  line-height: ${props => props.theme.font.height.base};
  color: ${props => props.theme.color.text.shade500};
  padding: 0;
  margin: 0;
`

export const Link = css`
  color: ${props => props.theme.color.primary.base};
  cursor: pointer;
  text-decoration: none;
  &:hover,
  :focus {
    color: ${props => props.theme.color.primary.shade200};
  }
`

export const List = css`
  margin-left: 0;
  margin-right: 0;
  padding: 0;
  margin-bottom: ${props => props.theme.space.m};
  list-style-position: inside;
  list-style-image: none;

  ${media.tablet`
    list-style-position: outside;
  `}
`

export const ListItem = css`
  ${Body}
  padding-left: 0;
  margin-bottom: ${props => props.theme.space.s};
  & > p {
    margin-bottom: ${props => props.theme.space.s};
  }
  & *:last-child {
    margin-bottom: 0;
  }
  & > ul {
    margin-left: ${props => props.theme.space.m};
    margin-top: ${props => props.theme.space.s};
  }
`

export const H1 = styled.h1`
  ${Headings}
  ${HeadingL}

  ${media.tablet`
    ${HeadingXL}
  `}

  ${media.desktop`
    ${HeadingXXL}
  `}
`

export const H2 = styled.h2`
  ${Headings}
  ${HeadingM}

  ${media.tablet`
    ${HeadingL}
  `}

  ${media.desktop`
    ${HeadingXL}
  `}
`

export const H3 = styled.h3`
  ${Headings}
  ${HeadingS}

  ${media.tablet`
    ${HeadingM}
  `}

  ${media.desktop`
    ${HeadingL}
  `}
`

export const H4 = styled.h4`
  ${Headings}
  ${HeadingXS}

  ${media.tablet`
    ${HeadingS}
  `}

  ${media.desktop`
    ${HeadingM}
  `}
`

export const H5 = styled.h5`
  ${Headings}
  ${BaseSize}

  ${media.tablet`
    ${HeadingXS}
  `}

  ${media.desktop`
    ${HeadingS}
  `}
`

export const H6 = styled.h6`
  ${Headings}
  ${SmallSize}

  ${media.tablet`
    ${BaseSize}
  `}

  ${media.desktop`
    ${HeadingXS}
  `}
`

export const P = styled.p`
  ${Body}
  ${SmallSize}
  padding: 0;
  margin: 0 0 ${props => props.theme.font.height.base} 0;

  ${media.mobile`
    ${BaseSize}
  `}

  ${props =>
    props.$ui &&
    css`
      ${UI}
    `}

    ${props =>
    props.$lead &&
    css`
      color: ${props => props.theme.color.text.shade200};
      font-family: ${props => props.theme.font.family.heading};
      ${BaseSize}

      ${media.mobile`
        ${HeadingXS}
      `}
    `}
`

export const Ul = styled.ul`
  ${List}
`

export const Ol = styled.ol`
  ${List}
`

export const Li = styled.li`
  ${ListItem}
`

export const Small = styled.small`
  ${Meta}
  ${TinySize}
  display: block;
  margin-top: ${props => props.theme.space.s};
  margin-bottom: ${props =>
    "-" +
    (remToFloat(props.theme.font.height.base) * 2 -
      remToFloat(props.theme.space.xs)) +
    "rem"};

  ${props =>
    props.$top &&
    css`
      margin-top: 0;
    `}

  ${props =>
    props.$bottom &&
    css`
      margin-bottom: 0;
    `}

  ${media.mobile`
    ${SmallSize}
  `}
`

export const A = styled.a`
  ${Link}
  text-decoration: underline;
  &:visited {
    color: ${props => props.theme.color.primary.shade500};
  }
  &:hover,
  :focus {
    text-decoration: none;
  }
`

export const Blockquote = styled.blockquote`
  padding: 0 0 0 ${props => props.theme.space.s};
  margin-left: 0;
  border-left: ${props => props.theme.space.xxs} solid
    ${props => props.theme.color.primary.base};

  & > p {
    font-style: italic;
    font-size: ${props => props.theme.font.size.xs};
    line-height: ${props => props.theme.font.height.s};
    color: ${props => props.theme.color.text.shade400};
  }

  & > :last-child {
    margin-bottom: 0;
  }

  & > ul,
  li {
    list-style-position: inside;
  }

  ${media.tablet`
    padding-left: ${props => props.theme.space.m};
    margin-right: ${props => props.theme.space.m};
    margin-bottom: ${props => props.theme.space.m};
    margin-left: ${props => "-" + props.theme.space.m};
  `}
`

export const Table = styled.table`
  ${Body}
  width: 100%;
  margin-bottom: ${props => props.theme.space.m};
  border-collapse: collapse;
  border-spacing: ${props => props.theme.space.xs};

  & thead tr th {
    border-bottom: 1px solid ${props => props.theme.color.surface.shade500};
  }
`
// think about making it more abstract
export const Address = styled.address`
  font-style: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space.s};
  margin-bottom: ${props => props.theme.space.l};
`

export const Hr = styled.hr`
  background-color: ${props => props.theme.color.surface.shade200};
  border: 0;
  height: ${props => props.theme.space.xxs};
`

export const Code = css`
  ${BaseSize}
  font-family: ${props => props.theme.font.family.code};
`

export const InlineCode = styled.code`
  ${Code}
  color: ${props => props.theme.color.text.shade200};
  background-color: ${props => props.theme.color.surface.shade200};
  border-radius: ${props => props.theme.space.xs};
  padding: ${props => props.theme.space.xxs};
`
export const BlockCode = styled.pre`
  ${Code}
  padding: ${props => props.theme.font.height.base};
  border-radius: ${props => props.theme.space.xs};
  overflow-x: auto;
`
