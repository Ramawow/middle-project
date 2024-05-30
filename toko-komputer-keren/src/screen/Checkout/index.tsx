import { Container, Flex, Box } from '@chakra-ui/react'

const Checkout = () => {
  return (
    <Container maxW='container.xl' py='5' minH='calc(100vh - 75px - 60px)'>
      <Flex bg='lightcoral'>
        <Box bg='lightcyan' flex='4'>
          left
        </Box>
        <Box bg='lightgoldenrodyellow' flex='3'>
          right
        </Box>
      </Flex>
    </Container>
  )
}

export default Checkout
