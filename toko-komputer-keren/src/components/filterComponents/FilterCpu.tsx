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
  cpuDropdownInterface,
  cpuDropdownType,
  cpuFilterInterface,
} from '../../interface'

const defaultDropdown: cpuDropdownInterface = {
  manufacturer: false,
  series: false,
  codeName: false,
  coreCount: false,
  coreClock: false,
  tdp: false,
  threadCount: false,
  releaseDate: false,
  socket: false,
}

const defaultFilter: cpuFilterInterface = {
  manufacturer: ['all'],
  series: ['all'],
  codeName: ['all'],
  coreCount: [1, 64],
  coreClock: [1, 5],
  threadCount: [1, 288],
  tdp: [1, 400],
  releaseDate: ['all'],
  socket: ['all'],
}

const FilterCpu = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: cpuDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onCheckBoxChange(e: cpuDropdownType, value: Array<string | number>) {
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

  function onRangeSliderChange(e: cpuDropdownType, value: number[]) {
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
                  <Checkbox value='amd'>Amd</Checkbox>
                  <Checkbox value='intel'>Intel</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('series')}>
            <Text>Series</Text>
            <Spacer />
            <Box>{dropdown.series ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.series && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.series}
                size='sm'
                colorScheme='accent'
                onChange={e => onCheckBoxChange('series', e)}
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='AMD Ryzen 3'>AMD Ryzen 3</Checkbox>
                  <Checkbox value='AMD Ryzen 5'>AMD Ryzen 5</Checkbox>
                  <Checkbox value='AMD Ryzen 7'>AMD Ryzen 7</Checkbox>
                  <Checkbox value='AMD Ryzen 9'>AMD Ryzen 9</Checkbox>
                  <Checkbox value='Intel Core i3'>Intel Core i3</Checkbox>
                  <Checkbox value='Intel Core i5'>Intel Core i5</Checkbox>
                  <Checkbox value='Intel Core i7'>Intel Core i7</Checkbox>
                  <Checkbox value='Intel Core i9'>Intel Core i9</Checkbox>
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
                size='sm'
                colorScheme='accent'
                onChange={e => onCheckBoxChange('socket', e)}
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
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('codeName')}>
            <Text>Codename</Text>
            <Spacer />
            <Box>{dropdown.codeName ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.codeName && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.codeName}
                size='sm'
                colorScheme='accent'
                onChange={e => onCheckBoxChange('codeName', e)}
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='matise'>matise</Checkbox>
                  <Checkbox value='pinacle ridge'>pinacle ridge</Checkbox>
                  <Checkbox value='skylake'>skylake</Checkbox>
                  <Checkbox value='haswell'>haswell</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('coreCount')}>
            <Text>Core Count</Text>
            <Spacer />
            <Box>{dropdown.coreCount ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.coreCount && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.coreCount[0]}</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.coreCount[1]}</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 64]}
                min={1}
                max={64}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('coreCount', e)}
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
                <Text fontSize='xs'>{filters.coreClock[0]} GHz</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.coreClock[1]} GHz</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 5]}
                min={1}
                max={5}
                step={0.1}
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
            onClick={() => onDropdownChange('threadCount')}
          >
            <Text>Thread Count</Text>
            <Spacer />
            <Box>{dropdown.threadCount ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.threadCount && (
            <Box pl='2' mt='2'>
              <HStack w='full' fontSize='sm'>
                <Text fontSize='xs'>{filters.threadCount[0]}</Text>
                <Spacer />
                <Text fontSize='xs'>{filters.threadCount[1]}</Text>
              </HStack>
              <RangeSlider
                defaultValue={[1, 288]}
                min={1}
                max={64}
                colorScheme='accent'
                onChangeEnd={e => onRangeSliderChange('threadCount', e)}
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
                defaultValue={[1, 400]}
                min={1}
                max={400}
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

        <Divider borderColor='gray.500' />

        <Box w='full'>
          <HStack
            w='full'
            cursor='pointer'
            onClick={() => onDropdownChange('releaseDate')}
          >
            <Text>Release Date</Text>
            <Spacer />
            <Box>{dropdown.releaseDate ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.releaseDate && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.releaseDate}
                size='sm'
                colorScheme='accent'
                onChange={e => onCheckBoxChange('releaseDate', e)}
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='2021'>2021</Checkbox>
                  <Checkbox value='2020'>2020</Checkbox>
                  <Checkbox value='2019'>2019</Checkbox>
                  <Checkbox value='2018'>2018</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  )
}

export default FilterCpu
