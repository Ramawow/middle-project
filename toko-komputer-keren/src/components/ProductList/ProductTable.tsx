import { useMemo } from 'react'
import { useTable, useRowSelect, CellProps, Column } from 'react-table'
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox } from '@chakra-ui/react'

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

const ProductTable = <T extends {}>({ unMemoizedData }: Prop<T>) => {
  const data = useMemo(() => unMemoizedData, [unMemoizedData])

  const columns: readonly Column<object>[] = useMemo(
    () => getColumns(unMemoizedData),
    [unMemoizedData]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState: { hiddenColumns: ['id'] },
    },
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => {
            const { checked, indeterminate, onChange } = getToggleAllRowsSelectedProps()
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
                    <Th px='3' {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render('Header')
                      }
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
            rows.map(row => {
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
      {console.log(selectedFlatRows.map(row => row.original))}
    </div>
  )
}

export default ProductTable
