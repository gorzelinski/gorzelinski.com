import type { MDXComponents } from 'mdx/types'
import { LINKS } from './constants'
import {
  Blockquote,
  Callout,
  Code,
  Caption,
  Em,
  Figcaption,
  Figure,
  H1,
  H2,
  H3,
  H4,
  Hr,
  Image,
  InlineCode,
  Li,
  LinkOrA,
  Ol,
  P,
  Small,
  Strong,
  Sub,
  Sup,
  Table,
  TableWrapper,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Ul,
  verticalRhythm,
  preToCodeProps,
  PreProps
} from './design-system'

const components: MDXComponents = {
  a: ({ children, href }) => <LinkOrA href={href!}>{children}</LinkOrA>,
  blockquote: ({ children }) => {
    return (
      <Blockquote css={verticalRhythm.marginBottom.m}>{children}</Blockquote>
    )
  },
  caption: ({ children }) => (
    <Caption css={verticalRhythm.marginTop.s}>{children}</Caption>
  ),
  code: ({ children }) => <InlineCode>{children}</InlineCode>,
  em: ({ children }) => <Em>{children}</Em>,
  figcaption: ({ children }) => (
    <Figcaption css={verticalRhythm.marginTop.s}>{children}</Figcaption>
  ),
  figure: ({ children }) => (
    <Figure css={verticalRhythm.marginBottom.m}>{children}</Figure>
  ),
  h1: ({ children }) => (
    <H1
      css={{
        ...verticalRhythm.marginBottom.m,
        ...verticalRhythm.marginTop['2xmarginBottom']
      }}
    >
      {children}
    </H1>
  ),
  h2: ({ children }) => (
    <H2
      css={{
        ...verticalRhythm.marginBottom.m,
        ...verticalRhythm.marginTop['2xmarginBottom']
      }}
    >
      {children}
    </H2>
  ),
  h3: ({ children }) => (
    <H3
      css={{
        ...verticalRhythm.marginBottom.m,
        ...verticalRhythm.marginTop['2xmarginBottom']
      }}
    >
      {children}
    </H3>
  ),
  h4: ({ children }) => (
    <H4
      css={{
        ...verticalRhythm.marginBottom.m,
        ...verticalRhythm.marginTop['2xmarginBottom']
      }}
    >
      {children}
    </H4>
  ),
  hr: () => (
    <Hr
      css={{
        ...verticalRhythm.marginBottom.l,
        ...verticalRhythm.marginTop.l
      }}
    />
  ),
  li: ({ children }) => <Li css={verticalRhythm.marginBottom.s}>{children}</Li>,
  ol: ({ children }) => <Ol css={verticalRhythm.marginBottom.m}>{children}</Ol>,
  p: ({ children }) => <P css={verticalRhythm.marginBottom.m}>{children}</P>,
  pre: ({ children, title }) => {
    const { codeString, language } = preToCodeProps(children as PreProps)

    return (
      <Code
        css={verticalRhythm.marginBottom.m}
        codeString={codeString}
        language={language}
        title={title}
      />
    )
  },
  small: ({ children }) => <Small>{children}</Small>,
  strong: ({ children }) => <Strong>{children}</Strong>,
  sub: ({ children }) => <Sub>{children}</Sub>,
  sup: ({ children }) => <Sup>{children}</Sup>,
  table: ({ children }) => (
    <TableWrapper css={verticalRhythm.marginBottom.m}>
      <Table>{children}</Table>
    </TableWrapper>
  ),
  tbody: ({ children }) => <Tbody>{children}</Tbody>,
  td: ({ children }) => <Td>{children}</Td>,
  th: ({ children }) => <Th>{children}</Th>,
  thead: ({ children }) => <Thead>{children}</Thead>,
  tr: ({ children }) => <Tr>{children}</Tr>,
  ul: ({ children }) => <Ul css={verticalRhythm.marginBottom.m}>{children}</Ul>
}

const customComponents: MDXComponents = {
  Callout: ({ children, ...props }) => (
    <Callout {...props} css={verticalRhythm.marginBottom.m}>
      {children}
    </Callout>
  )
}

export function getMDXComponents(
  page: (typeof LINKS)['blog' | 'portfolio'],
  slug: string
): MDXComponents {
  return {
    ...components,
    ...customComponents,
    img: ({ src, alt, title }) => (
      <Image
        src={`/images${page}${slug}/${src!}`}
        alt={alt!}
        title={title}
        width={800}
        height={500}
      />
    )
  }
}
