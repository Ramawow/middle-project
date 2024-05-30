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
  gpuDropdownInterface,
  gpuDropdownType,
  gpuFilterInterface,
} from '../../interface'

const defaultDropdown: gpuDropdownInterface = {
  manufacturer: false,
  chipset: false,
  boostClock: false,
  coreClock: false,
  memoryType: false,
  memory: false,
  tdp: false,
  interface: false,
}

const defaultFilter: gpuFilterInterface = {
  manufacturer: ['all'],
  chipset: ['all'],
  coreClock: [1, 16],
  boostClock: [1, 16],
  memoryType: ['all'],
  memory: [1, 26],
  tdp: [1, 16],
  interface: ['all'],
}

const FilterGpu = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: gpuDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: gpuDropdownType, value: Array<string | number>) {
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

  function onRangeSliderChange(e: gpuDropdownType, value: number[]) {
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('chipset')}>
            <Text>Chipset</Text>
            <Spacer />
            <Box>{dropdown.chipset ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.chipset && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.chipset}
                onChange={value => onCheckBoxChange('chipset', value)}
                size='sm'
                colorScheme='accent'
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='GeForce RTX 2060 Super'>
                    GeForce RTX 2060 Super
                  </Checkbox>
                  <Checkbox value='GeForce RTX 2070 Super'>
                    GeForce RTX 2070 Super
                  </Checkbox>
                  <Checkbox value='GeForce RTX 2080 Super'>
                    GeForce RTX 2080 Super
                  </Checkbox>
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
                  <Checkbox value='PCIe x16'>PCIe x16</Checkbox>
                  <Checkbox value='PCIe x8'>PCIe x8</Checkbox>
                  <Checkbox value='PCIe x1'>PCIe x1</Checkbox>
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('memory')}>
            <Text>Memory</Text>
            <Spacer />
            <Box>{dropdown.memory ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.memory && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.memory[0]} GB</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.memory[1]} GB</Text>
              </HStack>
              <RangeSlider
                defaultValue={[0, 26]}
                min={0}
                max={26}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('memory', e)}
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('coreClock')}>
            <Text>Core Clock</Text>
            <Spacer />
            <Box>{dropdown.coreClock ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.coreClock && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.coreClock[0]} MHz</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.coreClock[1]} MHz</Text>
              </HStack>
              <RangeSlider
                defaultValue={[0, 2500]}
                min={0}
                max={2500}
                step={100}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('coreClock', e)}
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
            onClick={() => onDropdownChange('boostClock')}
          >
            <Text>Boost Clock</Text>
            <Spacer />
            <Box>{dropdown.boostClock ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.boostClock && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.boostClock[0]} MHz</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.boostClock[1]} MHz</Text>
              </HStack>
              <RangeSlider
                defaultValue={[0, 2500]}
                min={0}
                max={2500}
                step={100}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('boostClock', e)}
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('tdp')}>
            <Text>TDP</Text>
            <Spacer />
            <Box>{dropdown.tdp ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.tdp && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.tdp[0]} W</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.tdp[1]} W</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 580]}
                min={1}
                max={580}
                step={10}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('tdp', e)}
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

export default FilterGpu
