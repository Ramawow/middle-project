import {
  Box,
  Divider,
  VStack,
  HStack,
  Text,
  Spacer,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react'
import { useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'
import {
  caseDropdownInterface,
  caseDropdownType,
  caseFilterInterface,
} from '../../interface'

const defaultDropdown: caseDropdownInterface = {
  manufacturer: false,
  formFactor: false,
}

const defaultFilter: caseFilterInterface = {
  manufacturer: ['all'],
  formFactor: ['all'],
}

const FilterCase = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: caseDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: caseDropdownType, value: Array<string | number>) {
    if (filters[e][0] === 'all' && value.length > 1) {
      setFilters({ ...filters, [e]: value.filter(current => current !== 'all') })
    } else if (
      !filters[e].find(current => current === 'all') &&
      value.find(current => current === 'all')
    ) {
      setFilters({ ...filters, [e]: ['all'] })
    } else {
      setFilters({ ...filters, [e]: value })
    }

    if (value.length === 0) {
      setFilters({ ...filters, [e]: ['all'] })
    }
  }

  return (
    <Box w='full' fontWeight='medium'>
      <VStack alignItems='flex-start'>
        <Box w='full'>
          <HStack
            w='full'
            cursor='pointer'
            onClick={() => onDropdownChange('manufacturer')}
          >
            <Text>Manufacturer</Text>
            <Spacer />
            <Box>{dropdown.manufacturer ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.manufacturer && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.manufacturer}
                onChange={value => onCheckBoxChange('manufacturer', value)}
                size='sm'
                colorScheme='accent'
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='asrock'>Asrock</Checkbox>
                  <Checkbox value='aorus'>Aorus</Checkbox>
                  <Checkbox value='asus'>Asus</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack
            w='full'
            cursor='pointer'
            onClick={() => onDropdownChange('formFactor')}
          >
            <Text>Form Factor</Text>
            <Spacer />
            <Box>{dropdown.formFactor ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.formFactor && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.formFactor}
                onChange={value => onCheckBoxChange('formFactor', value)}
                size='sm'
                colorScheme='accent'
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='AM4'>AM4</Checkbox>
                  <Checkbox value='LGA1150'>LGA1150</Checkbox>
                  <Checkbox value='LGA1151'>LGA1151</Checkbox>
                  <Checkbox value='sTRX4'>sTRX4</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  )
}

export default FilterCase
