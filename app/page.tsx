import { Container, VStack, Wrap } from '@/styled-system/jsx'
import {
  A,
  Blockquote,
  Button,
  ButtonLink,
  Caption,
  Em,
  Figcaption,
  Figure,
  H1,
  H2,
  H3,
  H4,
  Hr,
  InlineCode,
  Li,
  Link,
  Ol,
  P,
  Pill,
  Small,
  Strong,
  Table,
  TableWrapper,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Ul
} from '@/components'

export default function Home() {
  return (
    <Container maxWidth="640px">
      <VStack alignItems="start" gap="l">
        <Small>This is small</Small>
        <H1>Hello 🐼!</H1>
        <Figcaption>This is figcaption</Figcaption>
        <H2>Hello 🐼!</H2>
        <H3>Hello 🐼!</H3>
        <A href="#">
          <H4>Hello 🐼!</H4>
        </A>
        <Pill>Last Updated July 8, 2022</Pill>
        <P size="xl" color="subtle" style="italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          earum odit rem est pariatur sapiente, quidem officiis veniam
          temporibus ipsum.
        </P>
        <Hr></Hr>
        <P size="l" color="subtle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          ipsam unde soluta expedita ab ex, eius laborum sint recusandae libero
          quos dicta commodi provident vero aut quibusdam minus vel dolorum.
        </P>
        <Figure>
          <Figcaption>This is figcaption</Figcaption>
        </Figure>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil{' '}
          commodi <InlineCode>npm run dev</InlineCode> ut itaque non, nemo eius
          accusamus architecto dignissimos quasi quibusdam doloremque
          perspiciatis repudiandae eaque molestias excepturi?{' '}
          <Strong>Exercitationem</Strong> debitis omnis libero, nesciunt
          repudiandae quaerat? Earum cupiditate doloribus rerum optio ducimus
          porro <Em>consequuntur</Em> doloremque magni? Eius sed deleniti{' '}
          <A href="#">veritatis</A> animi amet aliquid.{' '}
        </P>
        <Wrap>
          <Button style="text" align="left">
            Align left
          </Button>
          <Button>Primary button</Button>
          <Button disabled>Primary disabled</Button>
          <Button style="outline">Outline button</Button>
          <Button style="outline" disabled>
            Outline disabled
          </Button>
          <Button style="text">Text button</Button>
          <Button style="text" disabled>
            Text disabled
          </Button>
          <Button style="nav">Nav button</Button>
          <Button style="nav" disabled>
            Nav disabled
          </Button>
          <Button style="nav" className="active-subtle">
            Nav active subtle
          </Button>
          <Button style="nav" className="active">
            Nav active
          </Button>
        </Wrap>
        <Wrap alignItems="flex-end">
          <Button size="l">Big button</Button>
          <Button size="m">Medium button</Button>
          <Button size="s">Small button</Button>
        </Wrap>
        <Wrap alignItems="baseline" gap="s">
          <Button width="fixed">
            Fixed button <span>🐼</span>
          </Button>
          <Button width="fixed">Fixed button</Button>
        </Wrap>
        <Blockquote>
          <P size="xl" color="subtle" style="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident!
          </P>
        </Blockquote>
        <ButtonLink style="text" href="/about">
          About
        </ButtonLink>
        <TableWrapper>
          <Table>
            <Thead>
              <Tr>
                <Th>Header</Th>
                <Th>Header</Th>
                <Th>Header</Th>
                <Th>Header</Th>
                <Th>Header</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
              </Tr>
              <Tr>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
                <Td>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore soluta voluptatum suscipit sit placeat perspiciatis at
                  vero beatae.
                </Td>
                <Td>Table cell</Td>
              </Tr>
              <Tr>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
                <Td>Table cell</Td>
              </Tr>
            </Tbody>
            <Caption>This is table caption</Caption>
          </Table>
        </TableWrapper>
        <Ul>
          <Li>
            <Link href="/about">About</Link> This is list element
          </Li>
          <Li>This is list element</Li>
          <Li>This is list element</Li>
        </Ul>
        <Ol>
          <Li>This is list element</Li>
          <Li>This is list element</Li>
          <Li>This is list element</Li>
        </Ol>
      </VStack>
    </Container>
  )
}
