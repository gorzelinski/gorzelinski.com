import { Container, VStack } from '@/styled-system/jsx'
import {
  A,
  Blockquote,
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
        <Blockquote>
          <P size="xl" color="subtle" style="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident!
          </P>
        </Blockquote>
        <Ul>
          <Li>This is list element</Li>
          <Li>This is list element</Li>
          <Li>This is list element</Li>
        </Ul>
        <Ol>
          <Li>This is list element</Li>
          <Li>This is list element</Li>
          <Li>This is list element</Li>
        </Ol>
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
      </VStack>
    </Container>
  )
}
