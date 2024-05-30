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
  ramDropdownInterface,
  ramDropdownType,
  ramFilterInterface,
} from '../../interface'

const defaultDropdown: ramDropdownInterface = {
  manufacturer: false,
  type: false,
  module: false,
  speed: false,
}

const defaultFilter: ramFilterInterface = {
  manufacturer: ['all'],
  type: ['all'],
  module: ['all'],
  speed: [1, 5000],
}

const FilterRam = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: ramDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: ramDropdownType, value: Array<string | number>) {
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

  function onRangeSliderChange(e: ramDropdownType, value: number[]) {
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('type')}>
            <Text>Type</Text>
            <Spacer />
            <Box>{dropdown.type ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.type && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.type}
                onChange={value => onCheckBoxChange('type', value)}
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('module')}>
            <Text>Modul</Text>
            <Spacer />
            <Box>{dropdown.module ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.module && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.module}
                onChange={value => onCheckBoxChange('module', value)}
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('speed')}>
            <Text>Speed</Text>
            <Spacer />
            <Box>{dropdown.speed ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.speed && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.speed[0]} MHz</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.speed[1]} MHz</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 5000]}
                min={1}
                max={5000}
                step={50}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('speed', e)}
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

export default FilterRam
