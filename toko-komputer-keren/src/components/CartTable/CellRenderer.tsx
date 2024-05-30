import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  Square,
  Td,
  Center,
} from '@chakra-ui/react'
import { Cell } from 'react-table'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

type Prop = {
  cell: Cell<{ qty?: number }, any>
  rowIndex: number
  onQtyChange: (rowIndex: number, value: number) => void
}

const CellRenderer = ({ cell, onQtyChange, rowIndex }: Prop) => {
  switch (cell.column.id) {
    case 'img':
      return (
        <Td p='3' {...cell.getCellProps()} fontSize='lg' w='0%'>
          <Square size='70px' bg='whitesmoke' />
        </Td>
      )
    case 'qty':
      return (
        <Td p='3' {...cell.getCellProps()} fontSize='lg' w='5%'>
          <InputGroup size='lg'>
            <InputLeftElement
              _hover={{ cursor: 'pointer' }}
              onClick={() => onQtyChange(rowIndex, cell.value - 1)}
              children={<AiOutlineMinusCircle color='gray.300' />}
            />
            <Input
              type='number'
              min={1}
              max={99}
              value={cell.value}
              onChange={e => onQtyChange(rowIndex, +e.target.value)}
            />
            <InputRightElement
              _hover={{ cursor: 'pointer' }}
              onClick={() => onQtyChange(rowIndex, cell.value + 1)}
              children={<AiOutlinePlusCircle color='gray.300' />}
            />
          </InputGroup>
        </Td>
      )
    case 'price':
      return (
        <Td p='3' {...cell.getCellProps()} fontSize='lg' w='15%'>
          <Center>
            {Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(
              cell.row.original.qty ? cell.value * cell.row.original.qty : cell.value
            )}
          </Center>
        </Td>
      )
    default:
      return (
        <Td
          p='3'
          {...cell.getCellProps()}
          fontSize='lg'
          w={cell.column.id === 'name' ? '40%' : '0%'}
        >
          {cell.render('Cell')}
        </Td>
      )
  }
}

export default CellRenderer
