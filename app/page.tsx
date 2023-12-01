import { Container, VStack } from '@/styled-system/jsx'
import { Blockquote, Em, H1, H2, H3, H4, P, Small, Strong } from '@/components'

export default function Home() {
  return (
    <Container maxWidth="640px">
      <VStack alignItems="start" gap="l">
        <Small>This is small</Small>
        <H1>Hello 🐼!</H1>
        <H2>Hello 🐼!</H2>
        <H3>Hello 🐼!</H3>
        <H4>Hello 🐼!</H4>
        <P size="xl" color="subtle" style="italic">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          earum odit rem est pariatur sapiente, quidem officiis veniam
          temporibus ipsum.
        </P>
        <P size="l" color="subtle">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          ipsam unde soluta expedita ab ex, eius laborum sint recusandae libero
          quos dicta commodi provident vero aut quibusdam minus vel dolorum.
        </P>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
          commodi ut itaque non, nemo eius accusamus architecto dignissimos
          quasi quibusdam doloremque perspiciatis repudiandae eaque molestias
          excepturi? <Strong>Exercitationem</Strong> debitis omnis libero,
          nesciunt repudiandae quaerat? Earum cupiditate doloribus rerum optio
          ducimus porro <Em>consequuntur</Em> doloremque magni? Eius sed
          deleniti veritatis animi amet aliquid.
        </P>
        <Blockquote>
          <P size="xl" color="subtle" style="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            provident!
          </P>
        </Blockquote>
      </VStack>
    </Container>
  )
}
