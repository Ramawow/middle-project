import { Box, VStack, Text, InputGroup, InputLeftElement, Input } from '@chakra-ui/react'

const FilterPrice = () => {
  return (
    <Box w='full' fontWeight='medium'>
      <Text>Price</Text>
      <VStack ml='2' mt='4' fontSize='small'>
        <InputGroup size='sm' mb='2' borderColor='gray.400'>
          <InputLeftElement color='gray.400'>Rp</InputLeftElement>
          <Input
            borderRadius='0'
            placeholder='Min Price'
            _placeholder={{ color: 'gray.400' }}
            _hover={{ borderColor: 'gray.400' }}
            _focus={{
              outline: 'solid',
              outlineWidth: '2px',
              outlineColor: 'accent.300',
              outlineOffset: '-1px',
            }}
          />
        </InputGroup>
        <InputGroup size='sm' mb='2' borderColor='gray.400'>
          <InputLeftElement color='gray.400'>Rp</InputLeftElement>
          <Input
            placeholder='Max Price'
            _placeholder={{ color: 'gray.400' }}
            _hover={{ borderColor: 'gray.400' }}
            _focus={{
              outline: 'solid',
              outlineWidth: '2px',
              outlineColor: 'accent.300',
              outlineOffset: '-1px',
            }}
            borderRadius='0'
          />
        </InputGroup>
      </VStack>
    </Box>
  )
}

export default FilterPrice
