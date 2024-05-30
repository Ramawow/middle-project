import {
  Button,
  VStack,
  Box,
  Heading,
  Input,
  FormLabel,
  FormControl,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Box py='10vh' minH='100vh' bg='accent.50'>
      <VStack>
        <Link to='/'>
          <Heading fontSize='32px' fontWeight='bold' color='accent.500'>
            nicofz
          </Heading>
        </Link>
        <Box minW={{ base: 'full', sm: '400px' }} px='6' as='form'>
          <VStack spacing='5'>
            <Heading fontSize='26px' fontWeight='light' mb='5'>
              Login into your account
            </Heading>
            <FormControl id='email'>
              <FormLabel fontWeight='normal' fontSize='sm'>
                Email address
              </FormLabel>
              <Input
                type='email'
                borderRadius='0'
                borderColor='gray.300'
                _hover={{ borderColor: 'gray.400' }}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel fontWeight='normal' fontSize='sm'>
                Passowrd
              </FormLabel>
              <Input
                type='password'
                borderRadius='0'
                borderColor='gray.300'
                _hover={{ borderColor: 'gray.400' }}
              />
            </FormControl>
            <Button type='submit' w='full' colorScheme='accent' borderRadius='0'>
              Login
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default Login
