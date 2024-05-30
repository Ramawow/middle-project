import { useMemo } from 'react'
import {
  useTable,
  useRowSelect,
  CellProps,
  Column,
  usePagination,
  useSortBy,
} from 'react-table'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  ButtonGroup,
  Button,
  Input,
  Select,
} from '@chakra-ui/react'

type Prop<T> = {
  unMemoizedData: T[]
}

function getColumns<T>(data: T[]) {
  if (data.length > 0) {
    const keys = Object.keys(data[0])
    return keys.map(key => ({
      Header: key.replace(/([A-Z])/g, ' $1'),
      accessor: key,
    }))
  }

  return []
}

const ProductTableWithPagination = <T extends { id: string }>({
  unMemoizedData,
}: Prop<T>) => {
  const data = useMemo(() => unMemoizedData, [unMemoizedData])

  const columns: readonly Column<object>[] = useMemo(
    () => getColumns(unMemoizedData),
    [unMemoizedData]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    toggleAllRowsSelected,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
      initialState: { hiddenColumns: ['id'], pageSize: 3 },
    },
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => {
            const { checked, indeterminate, onChange } =
              getToggleAllPageRowsSelectedProps()
            return (
              <div>
                <Checkbox
                  isChecked={checked}
                  isIndeterminate={indeterminate}
                  onChange={onChange}
                />
              </div>
            )
          },
          Cell: ({ row }: React.PropsWithChildren<CellProps<object, any>>) => {
            const { checked, onChange } = row.getToggleRowSelectedProps()
            return (
              <div>
                <Checkbox isChecked={checked} onChange={onChange} />
              </div>
            )
          },
        },
        ...columns,
      ])
    }
  )

  if (unMemoizedData.length < 1) return <div>no data</div>

  return (
    <div>
      <Button
        disabled={Object.keys(selectedRowIds).length === 0}
        onClick={() => toggleAllRowsSelected(false)}
        variant='link'
      >
        Select none
      </Button>

      <Table {...getTableProps()}>
        <Thead>
          {
            // Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <Th px='3' {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {
                        // Render the header
                        column.render('Header')
                      }
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                      </span>
                    </Th>
                  ))
                }
              </Tr>
            ))
          }
        </Thead>
        {/* Apply the table body props */}
        <Tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <Tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map(cell => {
                      // Apply the cell props
                      return (
                        <Td p='3' {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </Td>
                      )
                    })
                  }
                </Tr>
              )
            })
          }
        </Tbody>
      </Table>

      <ButtonGroup>
        <Button disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
          {'<<'}
        </Button>
        <Button disabled={!canPreviousPage} onClick={() => previousPage()}>
          {'<'}
        </Button>
        <Button disabled={!canNextPage} onClick={() => nextPage()}>
          {'>'}
        </Button>
        <Button disabled={!canNextPage} onClick={() => gotoPage(pageCount - 1)}>
          {'>>'}
        </Button>

        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>

        <Input
          min={1}
          type='number'
          defaultValue={pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? +e.target.value - 1 : 0
            console.log(page)
            gotoPage(page)
          }}
        />
      </ButtonGroup>

      <div>
        <span>Page size</span>
        <Select w='sm' value={pageSize} onChange={e => setPageSize(+e.target.value)}>
          {[3, 5, 7, 10].map(k => (
            <option key={k} value={k}>
              {k}
            </option>
          ))}
        </Select>
      </div>

      <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre>

      <pre>
        <code>
          {JSON.stringify(
            {
              selectedRowIds: selectedRowIds,
              'selectedFlatRows[].original': selectedFlatRows.map(d => d.original),
            },
            null,
            2
          )}
        </code>
      </pre>
      {/* {console.log(selectedFlatRows.map(row => row.original))} */}
    </div>
  )
}

export default ProductTableWithPagination
