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
  cpuCoolerDropdownInterface,
  cpuCoolerDropdownType,
  cpuCoolerFilterInterface,
} from '../../interface'

const defaultDropdown: cpuCoolerDropdownInterface = {
  manufacturer: false,
  socket: false,
  waterCooled: false,
  height: false,
}

const defaultFilter: cpuCoolerFilterInterface = {
  manufacturer: ['all'],
  socket: ['all'],
  waterCooled: ['all'],
  height: [1, 200],
}

const FilterCpuCooler = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: cpuCoolerDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: cpuCoolerDropdownType, value: Array<string | number>) {
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

  function onRangeSliderChange(e: cpuCoolerDropdownType, value: number[]) {
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('socket')}>
            <Text>Socket</Text>
            <Spacer />
            <Box>{dropdown.socket ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.socket && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.socket}
                onChange={value => onCheckBoxChange('socket', value)}
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
            onClick={() => onDropdownChange('waterCooled')}
          >
            <Text>Water Cooled</Text>
            <Spacer />
            <Box>{dropdown.waterCooled ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.waterCooled && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.waterCooled}
                onChange={value => onCheckBoxChange('waterCooled', value)}
                size='sm'
                colorScheme='accent'
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='Yes'>Yes</Checkbox>
                  <Checkbox value='No'>No</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('height')}>
            <Text>Height</Text>
            <Spacer />
            <Box>{dropdown.height ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.height && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.height[0]} mm</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.height[1]} mm</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 200]}
                min={1}
                max={200}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('height', e)}
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

export default FilterCpuCooler
