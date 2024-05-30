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
  monitorDropdownInterface,
  monitorDropdownType,
  monitorFilterInterface,
} from '../../interface'

const defaultDropdown: monitorDropdownInterface = {
  manufacturer: false,
  refreshRate: false,
  screenSize: false,
  resulution: false,
  panelType: false,
}

const defaultFilter: monitorFilterInterface = {
  manufacturer: ['all'],
  refreshRate: [1, 360],
  screenSize: [1, 64],
  resulution: ['all'],
  panelType: ['all'],
}

const FilterMonitor = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: monitorDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: monitorDropdownType, value: Array<string | number>) {
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

  function onRangeSliderChange(e: monitorDropdownType, value: number[]) {
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
            onClick={() => onDropdownChange('resulution')}
          >
            <Text>Resulution</Text>
            <Spacer />
            <Box>{dropdown.resulution ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.resulution && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.resulution}
                onChange={value => onCheckBoxChange('resulution', value)}
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('panelType')}>
            <Text>Panel Type</Text>
            <Spacer />
            <Box>{dropdown.panelType ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.panelType && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.panelType}
                onChange={value => onCheckBoxChange('panelType', value)}
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
            onClick={() => onDropdownChange('refreshRate')}
          >
            <Text>Refresh Rate</Text>
            <Spacer />
            <Box>{dropdown.refreshRate ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.refreshRate && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.refreshRate[0]} Hz</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.refreshRate[1]} Hz</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 360]}
                min={1}
                max={360}
                step={5}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('refreshRate', e)}
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

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack
            w='full'
            cursor='pointer'
            onClick={() => onDropdownChange('screenSize')}
          >
            <Text>Screen Size</Text>
            <Spacer />
            <Box>{dropdown.screenSize ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.screenSize && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.screenSize[0]} "</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.screenSize[1]} "</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 64]}
                min={1}
                max={64}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('screenSize', e)}
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

export default FilterMonitor
