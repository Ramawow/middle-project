import { Heading, Text, Button, Grid, GridItem, Box, Container } from '@chakra-ui/react'
const Header = () => {
  return (
    <Box bg='accent.50'>
      <Container maxW='container.xl'>
        <Grid h='350px' placeItems='center'>
          <GridItem>
            <Heading fontSize='5xl'>Welcome to the nicofz store</Heading>
            <Text fontSize='large'>We help you find the best part for your PC</Text>
            <Button
              my='1em'
              borderRadius='none'
              bg='accent.500'
              _hover={{ bg: 'accent.400' }}
              color='gray.100'
            >
              Build your PC
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

export default Header
