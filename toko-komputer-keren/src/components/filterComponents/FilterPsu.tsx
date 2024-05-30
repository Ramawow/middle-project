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
  psuDropdownInterface,
  psuDropdownType,
  psuFilterInterface,
} from '../../interface'

const defaultDropdown: psuDropdownInterface = {
  manufacturer: false,
  efficiency: false,
  type: false,
  modular: false,
  wattage: false,
}

const defaultFilter: psuFilterInterface = {
  manufacturer: ['all'],
  efficiency: ['all'],
  type: ['all'],
  modular: ['all'],
  wattage: [1, 2000],
}

const FilterPsu = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: psuDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: psuDropdownType, value: Array<string | number>) {
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

  function onRangeSliderChange(e: psuDropdownType, value: number[]) {
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
          <HStack
            w='full'
            cursor='pointer'
            onClick={() => onDropdownChange('efficiency')}
          >
            <Text>Efficiency</Text>
            <Spacer />
            <Box>{dropdown.efficiency ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.efficiency && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.efficiency}
                onChange={value => onCheckBoxChange('efficiency', value)}
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('modular')}>
            <Text>Modular</Text>
            <Spacer />
            <Box>{dropdown.modular ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.modular && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.modular}
                onChange={value => onCheckBoxChange('modular', value)}
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
                  <Checkbox value='Yes'>Yes</Checkbox>
                  <Checkbox value='No'>No3</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('wattage')}>
            <Text>Wattage</Text>
            <Spacer />
            <Box>{dropdown.wattage ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.wattage && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.wattage[0]} GB</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.wattage[1]} GB</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 2000]}
                min={1}
                max={2000}
                step={20}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('wattage', e)}
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

export default FilterPsu
