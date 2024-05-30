import {
  Box,
  Divider,
  VStack,
  HStack,
  Text,
  Spacer,
  Checkbox,
  CheckboxGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import { useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'
import {
  storageDropdownInterface,
  storageDropdownType,
  storageFilterInterface,
} from '../../interface'

const defaultDropdown: storageDropdownInterface = {
  manufacturer: false,
  interface: false,
  formFactor: false,
  nvme: false,
  capacity: false,
}

const defaultFilter: storageFilterInterface = {
  manufacturer: ['all'],
  interface: ['all'],
  formFactor: ['all'],
  nvme: ['all'],
  capacity: [1, 18000],
}

const FilterStorage = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: storageDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: storageDropdownType, value: Array<string | number>) {
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

  function onRangeSliderChange(e: storageDropdownType, value: number[]) {
    setFilters({ ...filters, [e]: value })
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('interface')}>
            <Text>Interface</Text>
            <Spacer />
            <Box>{dropdown.interface ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.interface && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.interface}
                onChange={value => onCheckBoxChange('interface', value)}
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
                  <Checkbox value='ATX'>ATX</Checkbox>
                  <Checkbox value='EATX'>EATX</Checkbox>
                  <Checkbox value='Micro ATX'>Micro ATX</Checkbox>
                  <Checkbox value='Mini ATX'>Mini ATX</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('nvme')}>
            <Text>NVME</Text>
            <Spacer />
            <Box>{dropdown.nvme ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.nvme && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.nvme}
                onChange={value => onCheckBoxChange('nvme', value)}
                size='sm'
                colorScheme='accent'
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='Yes'>Yes</Checkbox>
                  <Checkbox value='No'>No3</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('capacity')}>
            <Text>Capacity</Text>
            <Spacer />
            <Box>{dropdown.capacity ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.capacity && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.capacity[0]} GB</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.capacity[1]} GB</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 1800]}
                min={1}
                max={1800}
                step={100}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('capacity', e)}
                size='sm'
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb bg='accent.500' index={0} />
                <RangeSliderThumb bg='accent.500' index={1} />
              </RangeSlider>
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  )
}

export default FilterStorage
