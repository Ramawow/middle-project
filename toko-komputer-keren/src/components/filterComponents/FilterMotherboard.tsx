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
  motherboardDropdownInterface,
  motherboardDropdownType,
  motherboardFilterInterface,
} from '../../interface'

const defaultDropdown: motherboardDropdownInterface = {
  manufacturer: false,
  socket: false,
  formFactor: false,
  memorySlot: false,
  memoryType: false,
}

const defaultFilter: motherboardFilterInterface = {
  manufacturer: ['all'],
  socket: ['all'],
  memoryType: ['all'],
  memorySlot: [1, 16],
  formFactor: ['all'],
}

const FilterMotherboard = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: motherboardDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: motherboardDropdownType, value: Array<string | number>) {
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

  function onRangeSliderChange(e: motherboardDropdownType, value: number[]) {
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
          <HStack
            w='full'
            cursor='pointer'
            onClick={() => onDropdownChange('memoryType')}
          >
            <Text>Memory Type</Text>
            <Spacer />
            <Box>{dropdown.memoryType ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.memoryType && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.memoryType}
                onChange={value => onCheckBoxChange('memoryType', value)}
                size='sm'
                colorScheme='accent'
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='DDR2'>DDR2</Checkbox>
                  <Checkbox value='DDR3'>DDR3</Checkbox>
                  <Checkbox value='DDR4'>DDR4</Checkbox>
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
            onClick={() => onDropdownChange('memorySlot')}
          >
            <Text>Memory Slot</Text>
            <Spacer />
            <Box>{dropdown.memorySlot ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.memorySlot && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.memorySlot[0]}</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.memorySlot[1]}</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 16]}
                min={1}
                max={16}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('memorySlot', e)}
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

export default FilterMotherboard
