import { useLocation } from 'react-router-dom'
import {
  Box,
  Container,
  Flex,
  Center,
  Heading,
  Button,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  const location = useLocation()

  return (
    <Box
      bg={location.pathname === '/' ? 'accent.50' : 'white'}
      h='75px'
      boxSizing='border-box'
      borderBottom={location.pathname === '/' ? 'none' : 'solid 1px'}
      borderColor='gray.300'
    >
      <Container h='full' maxW='container.xl'>
        <Flex h='full' justifyContent='space-between'>
          <Center>
            <Link to='/'>
              <Heading fontSize='24px' fontWeight='bold' color='accent.500'>
                nicofz
              </Heading>
            </Link>
          </Center>
          <Center w='full' ml='10' mr='5'>
            <Box as='form' action='/fds' w='full'>
              <InputGroup size='sm'>
                <Input
                  placeholder='search'
                  borderColor='gray.400'
                  _placeholder={{ color: 'gray.400' }}
                  _hover={{ borderColor: 'gray.400' }}
                  // _focus={{
                  //   outline: 'solid',
                  //   outlineWidth: '2px',
                  //   outlineColor: 'accent.300',
                  //   outlineOffset: '-1px',
                  // }}
                  borderRadius='0'
                />
                <InputRightElement _hover={{ cursor: 'pointer' }}>
                  <AiOutlineSearch color='gray.400' />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Center>
          <Center>
            <Center mx='5'>
              <Link to='/cart'>
                <AiOutlineShoppingCart size='1.5em' />
              </Link>
            </Center>

            <Link to='/login'>
              <Button mx='5' borderRadius='none' colorScheme='accent'>
                Login
              </Button>
            </Link>
          </Center>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
