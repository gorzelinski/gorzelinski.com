import styled, { css } from "styled-components"

export const Headings = css`
  font-family: ${props => props.theme.font.family.heading};
  font-weight: ${props => props.theme.font.weight.medium};
  margin-top: ${props => props.theme.space.l};
  margin-bottom: ${props => props.theme.space.m};
  color: ${props => props.theme.color.text.base};
`

export const Body = css`
  font-family: ${props => props.theme.font.family.body};
  font-weight: ${props => props.theme.font.weight.regular};
  font-size: ${props => props.theme.font.size.base};
  line-height: ${props => props.theme.font.height.base};
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
  list-style-position: outside;
  list-style-image: none;
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
  font-size: ${props => props.theme.font.size.xxl};
  line-height: ${props => props.theme.font.height.xxl};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const H2 = styled.h2`
  ${Headings}
  font-size: ${props => props.theme.font.size.xl};
  line-height: ${props => props.theme.font.height.xl};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const H3 = styled.h3`
  ${Headings}
  font-size: ${props => props.theme.font.size.l};
  line-height: ${props => props.theme.font.height.l};
  letter-spacing: ${props => props.theme.font.spacing.packed};
`

export const H4 = styled.h4`
  ${Headings}
  font-size: ${props => props.theme.font.size.m};
  line-height: ${props => props.theme.font.height.m};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const H5 = styled.h5`
  ${Headings}
  font-size: ${props => props.theme.font.size.s};
  line-height: ${props => props.theme.font.height.s};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const H6 = styled.h6`
  ${Headings}
  font-size: ${props => props.theme.font.size.xs};
  line-height: ${props => props.theme.font.height.xs};
  letter-spacing: ${props => props.theme.font.spacing.narrow};
`

export const P = styled.p`
  ${Body}
  padding: 0;
  margin: 0 0 ${props => props.theme.space.m} 0;
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
  display: block;
  font-size: ${props => props.theme.font.size.small};
  line-height: ${props => props.theme.font.height.small};
  margin-bottom: ${props => "-" + props.theme.space.l};
`

export const UIText = styled.p`
  ${UI}
`

export const A = styled.a`
  ${Body}
  ${Link}
  &:hover, :focus {
    text-decoration: underline;
  }
`

export const Blockquote = styled.blockquote`
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
  padding-left: ${props => props.theme.space.m};
  margin-left: ${props => "-" + props.theme.space.m};
  margin-right: ${props => props.theme.space.m};
  margin-bottom: ${props => props.theme.space.m};
  border-left: ${props => props.theme.space.xxs} solid
    ${props => props.theme.color.primary.base};
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
