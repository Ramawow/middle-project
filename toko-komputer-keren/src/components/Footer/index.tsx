import { Text, Center, Box, Container } from '@chakra-ui/react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <Box borderTop='solid 1px' borderColor='gray.300' boxSizing='border-box' h='60px'>
      <Container h='full' maxW='container.xl'>
        <Center h='full'>
          <AiOutlineCopyrightCircle />
          <Text>nicofz</Text>
        </Center>
      </Container>
    </Box>
  )
}

export default Footer
