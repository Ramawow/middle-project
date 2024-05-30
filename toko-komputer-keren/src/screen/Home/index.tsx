import {
  Heading,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  Container,
  Center,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {
  Motherboard,
  Cpu,
  Gpu,
  Monitor,
  Storage,
  Ram,
  Psu,
  CpuCooler,
  Case,
} from '../../style/icons'

const Home = () => {
  return (
    <>
      <Box bg='accent.50'>
        <Container maxW='container.xl'>
          <Grid h='350px' placeItems='center'>
            <GridItem>
              <Heading fontSize='5xl'>Welcome to the nicofz store</Heading>
              <Text fontSize='large'>We help you find the best part for your PC</Text>
              <Button my='1em' borderRadius='none' colorScheme='accent'>
                Build your PC
              </Button>
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Container py='20' maxW='900px'>
        <Center mb='16'>
          <Text fontSize='1.5em'>Find product by categories</Text>
        </Center>
        <Grid
          templateColumns={{
            base: 'repeat(2, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          gap={{
            base: '2em',
            md: '4em',
          }}
        >
          <GridItem>
            <Center>
              <Link to='products/motherboard'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Motherboard />
                  </Box>
                  <Text>Motherboard</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/cpu'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Cpu />
                  </Box>
                  <Text>CPU</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/gpu'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Gpu />
                  </Box>
                  <Text>GPU</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/ram'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Ram />
                  </Box>
                  <Text>RAM</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/storage'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Storage />
                  </Box>
                  <Text>Storage</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/psu'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Psu />
                  </Box>
                  <Text>Power Supply</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/monitor'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Monitor />
                  </Box>
                  <Text>Monitor</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/cpu-cooler'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <CpuCooler />
                  </Box>
                  <Text>Cpu Cooler</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
          <GridItem>
            <Center>
              <Link to='products/case'>
                <VStack
                  p='2'
                  _hover={{
                    color: 'accent.500',
                    cursor: 'pointer',
                    position: 'relative',
                    transform: 'translateY(-3px)',
                    transitionDuration: '.1s',
                  }}
                  transitionDuration='.1s'
                >
                  <Box w='80px'>
                    <Case />
                  </Box>
                  <Text>Case</Text>
                </VStack>
              </Link>
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default Home
