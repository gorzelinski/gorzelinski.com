import {
  Blockquote,
  Em,
  Figcaption,
  Figure,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Hr,
  InlineCode,
  Li,
  Ol,
  P,
  Strong,
  Table,
  Ul,
} from "../elements"
import Callout from "../components/callout"
import CodeBlock from "../components/code"
import Link from "../components/link"

const components = {
  a: Link,
  blockquote: Blockquote,
  em: Em,
  figcaption: Figcaption,
  figure: Figure,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  inlineCode: InlineCode,
  li: Li,
  ol: Ol,
  p: P,
  pre: CodeBlock,
  strong: Strong,
  table: Table,
  ul: Ul,
  Callout,
}

export default components
