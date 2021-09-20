import {
  A,
  Blockquote,
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
  Table,
  Ul,
} from "../elements"
import CodeBlock from "../components/code"

const components = {
  p: P,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: Hr,
  blockquote: Blockquote,
  ul: Ul,
  ol: Ol,
  li: Li,
  table: Table,
  a: A,
  inlineCode: InlineCode,
  code: CodeBlock,
}

export default components
